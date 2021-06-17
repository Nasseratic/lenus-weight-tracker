import { AxiosResponse } from "axios";
import { HappinessLevels } from "components/HappinessInput";
import httpDriver, { createRequestWithAccessToken } from "utils/httpDriver";

export interface Measurement {
  _id?: string;
  createdAt?: string;
  trackingDate: string;
  weight: number;
  happinessLevel: HappinessLevels;
}

export const getMeasurement = createRequestWithAccessToken<Measurement[]>(
  () => ({
    url: "/measurements",
  })
);

export const addMeasurement = createRequestWithAccessToken(
  (data: Measurement) => ({
    url: "/measurements",
    data,
  })
);

export const editMeasurement = ({
  id,
  body,
}: {
  id: string;
  body: Partial<Measurement>;
}): Promise<AxiosResponse<unknown>> =>
  httpDriver.patch(`/measurements/${id}`, body);

export const deleteMeasurement = (
  id: string
): Promise<AxiosResponse<unknown>> => httpDriver.delete(`/measurements/${id}`);
