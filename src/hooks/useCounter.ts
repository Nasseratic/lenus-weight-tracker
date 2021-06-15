import { useState } from "react";

const { POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;
const useCounter = (
  initial: number,
  {
    max = POSITIVE_INFINITY,
    min = NEGATIVE_INFINITY,
  }: { max?: number; min?: number } = {
    max: POSITIVE_INFINITY,
    min: NEGATIVE_INFINITY,
  }
): [number, VoidFunction, VoidFunction] => {
  const [counter, setCounter] = useState(initial);
  const countUp = (): void => setCounter((c) => (c + 1 > max ? c : c + 1));
  const countDown = (): void => setCounter((c) => (c - 1 < min ? c : c - 1));
  return [counter, countUp, countDown];
};

export default useCounter;
