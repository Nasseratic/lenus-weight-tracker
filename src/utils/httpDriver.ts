/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetTokenSilentlyOptions } from "@auth0/auth0-react";
import axios, { AxiosRequestConfig } from "axios";

const httpDriver = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export function createRequestWithAccessToken<T, ParametersType = any>(
  getOptions: (parameters: ParametersType) => AxiosRequestConfig
): (
  getAccessToken: (
    options?: GetTokenSilentlyOptions | undefined
  ) => Promise<string>
) => (parameters: ParametersType) => Promise<T> {
  return (getAccessToken) => async (parameters) => {
    const accessToken = await getAccessToken({ timeoutInSeconds: 1 });
    const options = getOptions(parameters);
    return (
      await httpDriver({
        ...options,
        headers: {
          ...(options.headers ?? {}),
          Authorization: `Bearer ${accessToken}`,
        },
      })
    ).data as Promise<T>;
  };
}

export default httpDriver;
