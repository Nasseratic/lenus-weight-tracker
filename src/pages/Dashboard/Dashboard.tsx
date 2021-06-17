import LoadingOrError from "components/LoadingOrError";
import { useGetAllMeasurements } from "hooks/useMeasurement";
import React from "react";
import HistoryChart from "./components/HistoryChart";
import HistoryTable from "./components/HistoryTable";

export default function Dashboard() {
  const { data, isLoading } = useGetAllMeasurements();
  if (isLoading) return <LoadingOrError />;
  return (
    <div className="bg-gray-100 p-10 h-3/4">
      <div className="w-3/4 m-auto">
        <section className="shadow-lg  bg-white">
          <HistoryChart data={data ?? []} />
        </section>
        <HistoryTable data={data ?? []} />
      </div>
    </div>
  );
}
