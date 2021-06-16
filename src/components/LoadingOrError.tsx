import React, { ReactElement } from "react";

interface Properties {
  error?: Error;
}
export default function LoadingOrError({ error }: Properties): ReactElement {
  if (!error)
    return (
      <div className="fixed w-screen h-screen flex justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64" />
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
