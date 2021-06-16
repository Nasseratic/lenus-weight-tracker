import LoadingOrError from "components/LoadingOrError";
import { useGetAllMeasurements } from "hooks/useMeasurement";
import React from "react";
import HistoryChart from "./components/HistoryChart";
import HistoryTable from "./components/HistoryTable";

export default function Home() {
  const { data, isLoading } = useGetAllMeasurements();
  if (isLoading) return <LoadingOrError />;
  return (
    <div>
      <div className="w-3/4 m-auto">
        <section className="shadow-lg">
          <HistoryChart data={data ?? []} />
        </section>
        <HistoryTable data={data ?? []} />
      </div>
    </div>
  );
}
