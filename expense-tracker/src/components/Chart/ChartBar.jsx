function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div>
      {props.label}
      <div className="progress">
        <div className="progress-bar" style={{width: barFillHeight}} aria-valuenow={barFillHeight} aria-valuemin="0" aria-valuemax="100">{barFillHeight}</div>
      </div>
    </div>
  );
}

export default ChartBar;
