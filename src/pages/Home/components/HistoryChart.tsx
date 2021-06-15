import {
  AnimatedLineSeries,
  Axis,
  Grid,
  Tooltip,
  XYChart,
} from "@visx/xychart";
import { Measurement } from "api/measurements";
import React from "react";

const HistoryChart: React.FC<{ data: Measurement[] }> = ({ data }) => (
  <XYChart height={300} xScale={{ type: "utc" }} yScale={{ type: "linear" }}>
    <Axis orientation="bottom" />
    <Axis orientation="left" />
    <Grid columns={false} numTicks={4} />
    <AnimatedLineSeries
      dataKey="Weight"
      data={data}
      yAccessor={({ weight }) => weight}
      xAccessor={({ trackingDate }) => new Date(trackingDate)}
    />

    <Tooltip
      snapTooltipToDatumX
      snapTooltipToDatumY
      showVerticalCrosshair
      showSeriesGlyphs
      renderTooltip={({ tooltipData, colorScale }) => (
        <div>
          <div
            style={{
              color:
                colorScale && colorScale(tooltipData?.nearestDatum?.key ?? ""),
            }}
          >
            {tooltipData?.nearestDatum?.key}
          </div>
          {(tooltipData?.nearestDatum?.datum as Measurement).weight}
          <br />
          <span className="text-center">
            {(tooltipData?.nearestDatum?.datum as Measurement).createdAt}
          </span>
        </div>
      )}
    />
  </XYChart>
);

export default HistoryChart;
