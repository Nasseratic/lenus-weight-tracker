import { HappinessLevels } from "components/HappinessInput";
import { createRequestWithAccessToken } from "utils/httpDriver";

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
    method: "POST",
    url: "/measurements",
    data,
  })
);

export const editMeasurement = createRequestWithAccessToken(
  ({ id, data }: { id: string; data: Partial<Measurement> }) => ({
    method: "PATCH",
    url: `/measurements/${id}`,
    data,
  })
);

export const deleteMeasurement = createRequestWithAccessToken((id: string) => ({
  method: "DELETE",
  url: `/measurements/${id}`,
}));
