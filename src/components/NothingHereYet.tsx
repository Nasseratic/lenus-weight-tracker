import animationData from "assets/lap.json";
import React, { ReactElement } from "react";
import Lottie from "react-lottie";
import Button from "./Button";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
};
export default function NothingHereYet({
  onClick,
}: {
  onClick: () => any;
}): ReactElement {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center -mt-20 pt-20 z-0">
      {/* <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64" /> */}
      <Lottie options={lottieOptions} style={{ opacity: 0.8 }} height={300} />
      <h1 className="font-light text-2xl p-5">NOTHING HERE YET!</h1>
      <Button className="rounded-md" onClick={onClick}>
        Add new Measurement
      </Button>
    </div>
  );
}
