import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Button";

type NumberInputProperties = {
  initValue: number;
  onChange: (value: number) => void;
};

const NumberInput: React.FC<NumberInputProperties> = ({
  onChange,
  initValue,
}) => {
  const [counter, setCounter] = useState(initValue);

  useEffect(() => {
    onChange(counter);
  }, [onChange, counter]);

  const countUp = () => setCounter((c) => c + 1);
  const countDown = () => setCounter((c) => c - 1);

  return (
    <div className="flex justify-items-center flex-col">
      <div className="flex py-14 w-4/5 m-auto">
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCounter(Number(event.target.value))
          }
          value={counter}
          className="text-7xl px-10 text-center font-bold shadow appearance-none border rounded w-full"
        />
        <h3 className="py-14 px-6 text-2xl absolute">KG</h3>
      </div>
      <div className="flex justify-items-center m-auto">
        <Button onClick={countDown} className="rounded-l text-3xl">
          <FaMinus />
        </Button>
        <Button onClick={countUp} className="rounded-r text-3xl">
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default NumberInput;
