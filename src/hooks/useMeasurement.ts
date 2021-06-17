import {
  addMeasurement,
  deleteMeasurement,
  editMeasurement,
  getMeasurement,
  Measurement,
} from "api/measurements";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useRequestWithToken from "./useRequestWithToken";

export const QUERY_KEY = "measurement";

export const useGetAllMeasurements = () => {
  const getAll = useRequestWithToken(getMeasurement);
  return useQuery(QUERY_KEY, getAll);
};

export const useAddMeasurement = () => {
  const queryClient = useQueryClient();
  const add = useRequestWithToken(addMeasurement);

  return useMutation(add, {
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries(QUERY_KEY);
    },
  });
};

export const useEditMeasurement = () => {
  const queryClient = useQueryClient();

  return useMutation(editMeasurement, {
    onMutate: async (edited) => {
      await queryClient.cancelQueries(QUERY_KEY);

      const previousData = queryClient.getQueryData(QUERY_KEY);

      // Optimistically update
      queryClient.setQueryData<Measurement[]>(QUERY_KEY, (old) => {
        if (old) {
          const index = old?.findIndex((row) => row._id === edited.id);
          if (index >= 0) {
            old.splice(index, 1, { ...old[index], ...edited.body });
            return [...old];
          }
        }
        return old ?? [];
      });

      return { previousData };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEY);
    },
  });
};

export const useDeleteMeasurement = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteMeasurement, {
    onMutate: async (deletedId) => {
      await queryClient.cancelQueries(QUERY_KEY);

      const previousData = queryClient.getQueryData(QUERY_KEY);

      // Optimistically update
      queryClient.setQueryData<Measurement[]>(
        QUERY_KEY,
        (old) => old?.filter((r) => r._id !== deletedId) ?? []
      );

      return { previousData };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEY);
    },
  });
};
