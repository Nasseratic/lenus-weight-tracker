import { AxiosResponse } from "axios";
import { HappinessLevels } from "components/HappinessInput";
import httpDriver from "utils/httpDriver";

export interface Measurement {
  _id?: string;
  createdAt: string;
  trackingDate: string;
  weight: number;
  happinessLevel: HappinessLevels;
}

export const getMeasurement = (): Promise<AxiosResponse<Measurement[]>> =>
  httpDriver.get("/measurements");

export const addMeasurement = (
  body: Measurement
): Promise<AxiosResponse<unknown>> => httpDriver.post("/measurements", body);

export const editMeasurement = ({
  id,
  body,
}: {
  id: string;
  body: Partial<Measurement>;
}): Promise<AxiosResponse<unknown>> =>
  httpDriver.patch(`/measurements/${id}`, body);
