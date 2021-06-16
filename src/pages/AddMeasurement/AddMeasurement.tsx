import Button from "components/Button";
import HappinessInput, { HappinessLevels } from "components/HappinessInput";
import LoadingOrError from "components/LoadingOrError";
import NumberInput from "components/NumberInput";
import { useAddMeasurement, useGetAllMeasurements } from "hooks/useMeasurement";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";

const MIN_WEIGHT = 30;
const MAX_WEIGHT = 200;

function AddMeasurement() {
  const history = useHistory();
  const { data, isLoading: isLoadingMeasurements } = useGetAllMeasurements();
  const [counter, setCounter] = useState(MIN_WEIGHT);
  const [happiness, setHappiness] = useState(HappinessLevels.NORMAL);
  const [date, setDate] = useState(new Date());
  const { mutate, isLoading, error } = useAddMeasurement();
  if (isLoading || isLoadingMeasurements)
    return <LoadingOrError error={error as Error} />;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        mutate(
          {
            weight: counter,
            trackingDate: date.toISOString(),
            happinessLevel: happiness,
          },
          { onSuccess: () => history.goBack() }
        );
      }}
      className="flex flex-col py-5 items-center"
    >
      <div className="flex flex-col content-center items-center justify-items-center  w-screen">
        <HappinessInput onChange={setHappiness} />
        <div className="py-5">
          <DatePicker
            maxDate={new Date()}
            excludeDates={data?.map(
              ({ trackingDate }) => new Date(trackingDate)
            )}
            value={date.toDateString()}
            selected={date}
            onChange={(d: Date) => setDate(d || new Date())}
            className="text-4xl px-10 text-center font-bold shadow appearance-none border rounded w-full"
          />
        </div>
        <NumberInput
          initValue={MIN_WEIGHT}
          min={MIN_WEIGHT}
          max={MAX_WEIGHT}
          onChange={setCounter}
        />
      </div>
      <Button
        type="submit"
        className="w-1/4 my-20 rounded-xl text-3xl bg-black hover:bg-gray-800 text-white"
      >
        Submit
      </Button>
    </form>
  );
}

export default AddMeasurement;
