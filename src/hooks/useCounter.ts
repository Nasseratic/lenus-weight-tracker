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
): [number, VoidFunction, VoidFunction, (n: number) => void] => {
  const [counter, setCounter] = useState(initial);
  const countUp = (): void => setCounter((c) => (c + 1 > max ? c : c + 1));
  const countDown = (): void => setCounter((c) => (c - 1 < min ? c : c - 1));
  const set = (number: number): void => setCounter(number);
  return [counter, countUp, countDown, set];
};

export default useCounter;
