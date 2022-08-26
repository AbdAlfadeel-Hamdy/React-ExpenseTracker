import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  const maxValue = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          max={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
