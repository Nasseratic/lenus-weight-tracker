import React, { ReactElement, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "routes/mainRouter";
import { Header } from "./components/Header";
import LoadingOrError from "./components/LoadingOrError";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Header />
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
}
