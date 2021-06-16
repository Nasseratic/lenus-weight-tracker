import { Auth0Provider } from "@auth0/auth0-react";
import App from "App";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "twin.macro";
import "./index.css";

const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID as string;
const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN as string;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
