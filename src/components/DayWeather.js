import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Day() {
  const { results } = useContext(ForecastContext);

  return results.slice(1).map((result, i) => {
    return (
      <div className="forecast-item">
        <div className="day">
          <h4><span>{result.dayShort}</span></h4>
        </div>
        <div className="forecast">
          <h4> Maksimum Sıcaklık:<span> {result.maxTemp} ºC</span></h4>
          <h4> Minimum Sıcaklık: <span> {result.minTemp} ºC</span></h4>
        </div>
      </div>
    );
  });
}

export default Day;
