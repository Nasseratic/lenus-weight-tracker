import animationData from "assets/workout.json";
import React, { ReactElement } from "react";
import Lottie from "react-lottie";

interface Properties {
  error?: Error;
}

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
};
export default function LoadingOrError({ error }: Properties): ReactElement {
  if (!error)
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center -mt-16 z-30">
        {/* <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64" /> */}
        <Lottie options={lottieOptions} height={300} />
        <h1 className="font-bold text-2xl p-5">LOADING...</h1>
      </div>
    );
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl">{error ? error.message : "Loading..."}</h1>
    </div>
  );
}
LoadingOrError.defaultProps = {
  error: undefined,
};
