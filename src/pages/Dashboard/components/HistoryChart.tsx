import { curveMonotoneX } from "@visx/curve";
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
  <XYChart
    height={300}
    xScale={{ type: "utc" }}
    yScale={{ type: "linear", zero: false }}
  >
    <Axis orientation="bottom" />
    <Axis orientation="left" />
    <Grid columns={false} numTicks={10} />
    <AnimatedLineSeries
      dataKey="Weight"
      curve={curveMonotoneX}
      data={data}
      yAccessor={({ weight }) => weight}
      xAccessor={({ trackingDate }) => new Date(trackingDate)}
    />

    <Tooltip
      snapTooltipToDatumX
      snapTooltipToDatumY
      showVerticalCrosshair
      showSeriesGlyphs
      showDatumGlyph
      renderTooltip={({ tooltipData, colorScale }) => (
        <div>
          <div
            style={{
              color:
                colorScale && colorScale(tooltipData?.nearestDatum?.key ?? ""),
            }}
          >
            {tooltipData?.nearestDatum?.key}
            {` ( ${
              (tooltipData?.nearestDatum?.datum as Measurement).weight
            }kg )`}
          </div>
          <br />
          <span className="text-center">
            {new Date(
              (tooltipData?.nearestDatum?.datum as Measurement).trackingDate
            ).toDateString()}
          </span>
        </div>
      )}
    />
  </XYChart>
);

export default HistoryChart;
