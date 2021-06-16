import useCounter from "hooks/useCounter";
import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Button";

type NumberInputProperties = {
  initValue: number;
  onChange: (value: number) => void;
  max: number;
  min: number;
};

const NumberInput: React.FC<NumberInputProperties> = ({
  onChange,
  initValue,
  max,
  min,
}) => {
  const [counter, countUp, countDown, setCounter] = useCounter(initValue, {
    max,
    min,
  });

  useEffect(() => {
    onChange(counter);
  }, [onChange, counter]);

  return (
    <div className="flex justify-items-center flex-col">
      <div className="flex py-5 w-4/5 m-auto">
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCounter(Number(event.target.value));
          }}
          min={min}
          max={max}
          value={counter}
          type="number"
          className="text-7xl px-10 text-center font-bold shadow appearance-none border rounded w-full"
        />
        <h3 className="py-14 px-6 text-2xl absolute">KG</h3>
      </div>
      <div className="flex justify-items-center m-auto">
        <Button
          disabled={counter <= min}
          onClick={countDown}
          className="rounded-l text-3xl disabled:cursor-not-allowed"
        >
          <FaMinus />
        </Button>
        <Button
          disabled={counter >= max}
          onClick={countUp}
          className="rounded-r text-3xl disabled:cursor-not-allowed"
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default NumberInput;
