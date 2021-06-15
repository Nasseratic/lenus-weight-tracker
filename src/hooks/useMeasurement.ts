import {
  addMeasurement,
  editMeasurement,
  getMeasurement,
} from "api/measurements";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const QUERY_KEY = "measurement";

export const useGetAllMeasurements = () => useQuery(QUERY_KEY, getMeasurement);

export const useAddMeasurement = () => {
  const queryClient = useQueryClient();

  return useMutation(addMeasurement, {
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries(QUERY_KEY);
    },
  });
};

export const useEditMeasurement = () => {
  const queryClient = useQueryClient();

  return useMutation(editMeasurement, {
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries(QUERY_KEY);
    },
  });
};
