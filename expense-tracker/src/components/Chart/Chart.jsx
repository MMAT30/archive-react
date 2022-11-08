import { useState } from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
  const [metricButton, setMetricsButton] = useState(false);

  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataValues);

  const metricButtonHandler = (prevState) => {
    if (metricButton === false) {
      setMetricsButton(true);
    } else if (metricButton === true) {
      setMetricsButton(false);
    }
  };

  if (metricButton === false) {
    return (
      <div>
        <button
          onClick={metricButtonHandler}
          className="btn btn-secondary shadow-lg"
        >
          Show Metrics
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mt-3 mb-3">
            {props.dataPoints.map((dataPoint) => (
              <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maxValue}
                label={dataPoint.label}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={metricButtonHandler}
          className="btn btn-secondary shadow-lg mt-3 mb-3"
        >
          Hide Metrics
        </button>
      </div>
    </div>
  );
}

export default Chart;
