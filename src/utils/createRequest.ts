import { GetIdTokenClaimsOptions, IdToken } from "@auth0/auth0-react";
import { AxiosRequestConfig } from "axios";
import { createAxiosRequest } from "./httpDriver";

export type GetTokenFunction = (
  options?: GetIdTokenClaimsOptions | undefined
) => Promise<IdToken>;

export type WithTokenFunction<T> = (getToken: GetTokenFunction) => T;

export type CreateRequestConfig<RequestPrams, WithToken = any> = [
  getRequestOptions: (parameters: RequestPrams) => AxiosRequestConfig,
  otherConfig?: {
    // may add more config in the future
    withToken?: WithToken;
  }
];

// overloading for the withToken = false
export function createRequest<ResponseType = unknown, RequestPrams = unknown>(
  ...createRequestOptions: CreateRequestConfig<RequestPrams, false>
): (parameters: RequestPrams) => Promise<ResponseType>;

// overloading for withToken = true
export function createRequest<ResponseType = unknown, RequestPrams = unknown>(
  ...createRequestOptions: CreateRequestConfig<RequestPrams, true>
): WithTokenFunction<(parameters: RequestPrams) => Promise<ResponseType>>;

// implementation for createRequest
export function createRequest<ResponseType = unknown, RequestPrams = unknown>(
  ...[getRequestOptions, otherConfig = {}]: CreateRequestConfig<RequestPrams>
): unknown {
  if (otherConfig.withToken) {
    return (getToken: GetTokenFunction) => async (parameters: RequestPrams) => {
      const { __raw: token } = await getToken();
      const options = getRequestOptions(parameters);
      return createAxiosRequest<ResponseType>(options, token);
    };
  }

  return (parameters: RequestPrams) => {
    const options = getRequestOptions(parameters);
    return createAxiosRequest<ResponseType>(options);
  };
}
