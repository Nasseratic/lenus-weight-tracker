import { HappinessLevels } from "components/HappinessInput";
import { createRequest } from "utils/createRequest";

export interface Measurement {
  _id?: string;
  createdAt?: string;
  trackingDate: string;
  weight: number;
  happinessLevel: HappinessLevels;
}

export const getMeasurement = createRequest<Measurement[]>(
  () => ({
    url: "/measurements",
  }),
  { withToken: true }
);

export const addMeasurement = createRequest(
  (data: Measurement) => ({
    method: "POST",
    url: "/measurements",
    data,
  }),
  {
    withToken: true,
  }
);

export const editMeasurement = createRequest(
  ({ id, data }: { id: string; data: Partial<Measurement> }) => ({
    method: "PATCH",
    url: `/measurements/${id}`,
    data,
  }),
  { withToken: true }
);

export const deleteMeasurement = createRequest(
  (id: string) => ({
    method: "DELETE",
    url: `/measurements/${id}`,
  }),
  { withToken: true }
);
