import React, { useEffect, useState } from "react";
import { FaLaughBeam, FaSadTear, FaSmile } from "react-icons/fa";
import Button from "./Button";

export enum HappinessLevels {
  HAPPY = "happy",
  NORMAL = "normal",
  SAD = "sad",
}

type HappinessInputProperties = {
  onChange?: (value: HappinessLevels) => void;
};

const HappinessInput: React.FC<HappinessInputProperties> = ({ onChange }) => {
  const [happinessLevel, setHappinessLevel] = useState<HappinessLevels>(
    HappinessLevels.NORMAL
  );

  useEffect(() => {
    if (onChange) onChange(happinessLevel);
  }, [onChange, happinessLevel]);

  return (
    <div className="flex justify-items-center m-auto py-5">
      <Button
        onClick={() => setHappinessLevel(HappinessLevels.HAPPY)}
        className="rounded-l text-3xl bg-green-500 hover:bg-green-500"
        disabled={happinessLevel === HappinessLevels.HAPPY}
      >
        <FaLaughBeam />
      </Button>
      <Button
        onClick={() => setHappinessLevel(HappinessLevels.NORMAL)}
        className="text-3xl"
        disabled={happinessLevel === HappinessLevels.NORMAL}
      >
        <FaSmile />
      </Button>
      <Button
        onClick={() => setHappinessLevel(HappinessLevels.SAD)}
        className="rounded-r text-3xl bg-red-500 hover:bg-red-500"
        disabled={happinessLevel === HappinessLevels.SAD}
      >
        <FaSadTear />
      </Button>
    </div>
  );
};

export default HappinessInput;
