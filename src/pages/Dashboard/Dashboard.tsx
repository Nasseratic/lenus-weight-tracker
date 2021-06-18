import LoadingOrError from "components/LoadingOrError";
import NothingHereYet from "components/NothingHereYet";
import { useGetAllMeasurements } from "hooks/useMeasurement";
import React from "react";
import { useHistory } from "react-router-dom";
import HistoryChart from "./components/HistoryChart";
import HistoryTable from "./components/HistoryTable";

export default function Dashboard() {
  const { data, isLoading } = useGetAllMeasurements();
  const history = useHistory();
  if (isLoading) return <LoadingOrError />;
  if (data?.length === 0)
    return (
      <div>
        <NothingHereYet onClick={() => history.push("/new")} />
      </div>
    );
  return (
    <div className="bg-gray-100 p-8">
      <div className="w-3/4 m-auto">
        <section className="shadow-lg  bg-white">
          <HistoryChart data={data ?? []} />
        </section>
        <HistoryTable data={data ?? []} />
      </div>
    </div>
  );
}
