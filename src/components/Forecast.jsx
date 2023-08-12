import React from "react";
import ForecastItem from "./ForecastItem";

function Forecast({ forecastData }) {
  if (!forecastData || forecastData.length === 0) {
    return <p>No forecast data available yet.</p>;
  }

  // Extract the slice of items from forecastData outside the return statement
  const sliceItems = forecastData.list.slice(35);
  return (
    <div className="forecast-container">
      {/* Now map over the sliced items */}
      {sliceItems &&
        sliceItems.map((item, index) => (
          <ForecastItem key={index} date={item.dt_txt} main={item.main} />
        ))}
    </div>
  );
}

export default Forecast;
