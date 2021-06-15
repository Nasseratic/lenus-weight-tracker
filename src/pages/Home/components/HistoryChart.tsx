import {
  AnimatedLineSeries,
  Axis,
  Grid,
  Tooltip,
  XYChart,
} from "@visx/xychart";
import React, { useEffect, useState } from "react";

const datamok = [
  { x: "2020-01-01", y: 50 },
  { x: "2020-01-02", y: 10 },
  { x: "2020-01-03", y: 20 },
];

const data2mok = [
  { x: "2020-01-01", y: 30 },
  { x: "2020-01-02", y: 40 },
  { x: "2020-01-03", y: 80 },
];

const accessors = {
  xAccessor: (d: { x?: number } = {}) => d?.x ?? 0,
  yAccessor: (d: { y?: number } = {}) => d?.y ?? 0,
};

const HistoryChart: React.FC = () => {
  const [data1, setdata1] = useState<any[]>([]);
  const [data2, setdata2] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setdata1(datamok);
      setdata2(data2mok);
    }, 100);
  }, [setdata1, setdata2]);

  return (
    <XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
      <Axis orientation="bottom" />
      <Axis orientation="left" />
      <Grid columns={false} numTicks={4} />
      <AnimatedLineSeries
        dataKey="Line 1"
        data={data1}
        yAccessor={accessors.yAccessor as any}
        xAccessor={accessors.xAccessor}
      />
      <AnimatedLineSeries
        dataKey="Line 2"
        data={data2}
        yAccessor={accessors.yAccessor as any}
        xAccessor={accessors.xAccessor}
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
                  colorScale &&
                  colorScale(tooltipData?.nearestDatum?.key ?? ""),
              }}
            >
              {tooltipData?.nearestDatum?.key}
            </div>
            {accessors.xAccessor(tooltipData?.nearestDatum?.datum)}
            <br />
            <span className="text-center">
              {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}
            </span>
          </div>
        )}
      />
    </XYChart>
  );
};

export default HistoryChart;
