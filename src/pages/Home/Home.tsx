import React from "react";
import HistoryChart from "./components/HistoryChart";
import HistoryTable from "./components/HistoryTable";

export default function Home() {
  return (
    <div>
      <div className="w-3/4 m-auto">
        <section className="shadow-lg">
          <HistoryChart />
        </section>
        <HistoryTable />
      </div>
    </div>
  );
}
