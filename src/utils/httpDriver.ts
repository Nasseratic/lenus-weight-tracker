/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosRequestConfig } from "axios";

const httpDriver = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export async function createAxiosRequest<ResponseType>(
  options: AxiosRequestConfig,
  token?: string
): Promise<ResponseType> {
  return (
    await httpDriver({
      ...options,
      ...(token
        ? {
            headers: {
              ...(options.headers ?? {}),
              Authorization: `Bearer ${token}`,
            },
          }
        : {}),
    })
  ).data as Promise<ResponseType>;
}

export default httpDriver;
