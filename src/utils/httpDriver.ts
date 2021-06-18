/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetIdTokenClaimsOptions, IdToken } from "@auth0/auth0-react";
import axios, { AxiosRequestConfig } from "axios";

const httpDriver = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export function createRequestWithAccessToken<T, ParametersType = any>(
  getOptions: (parameters: ParametersType) => AxiosRequestConfig
): (
  getAccessToken: (
    options?: GetIdTokenClaimsOptions | undefined
  ) => Promise<IdToken>
) => (parameters: ParametersType) => Promise<T> {
  return (getAccessToken) => async (parameters) => {
    const { __raw: accessToken } = await getAccessToken();
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
