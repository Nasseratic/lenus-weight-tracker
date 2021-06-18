import { useAuth0 } from "@auth0/auth0-react";
import React, { ReactElement, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "routes/mainRouter";
import { Header } from "./components/Header";
import LoadingOrError from "./components/LoadingOrError";

export default function App(): ReactElement {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingOrError />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Header />
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
}
