import "./ChartBar.css";
const ChartBar = ({ label, value, max }) => {
  console.log(max);
  const maxHeight = Math.round((value / max) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="Chart-bar__fill"
          style={{
            height: maxHeight,
            backgroundColor: "#4826b9",
            transition: " all 0.3s ease-out",
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
