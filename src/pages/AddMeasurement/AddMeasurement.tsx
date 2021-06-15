import Button from "components/Button";
import HappinessInput from "components/HappinessInput";
import NumberInput from "components/NumberInput";
import React, { useState } from "react";

const INITIAL_WEIGHT = 40;

function AddMeasurement() {
  const [counter, setCounter] = useState(INITIAL_WEIGHT);

  return (
    <form
      onSubmit={() => console.log(counter)}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col py-28 content-center items-center justify-items-center  w-screen">
        <HappinessInput
          onChange={(v) => {
            console.log(v);
          }}
        />
        <NumberInput initValue={INITIAL_WEIGHT} onChange={setCounter} />
      </div>
      <Button
        type="submit"
        className="w-1/4 rounded-xl text-3xl bg-black hover:bg-gray-800 text-white"
      >
        Submit
      </Button>
    </form>
  );
}

export default AddMeasurement;
