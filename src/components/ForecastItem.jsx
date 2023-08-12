import React from "react";

function ForecastItem({ date, main, weather }) {
  const dateTime = new Date(date); // Convert the datetime string to a Date object
  const formattedDate = dateTime.toLocaleDateString(); // Get the formatted date (e.g., "8/16/2023")
  const formattedTime = dateTime.toLocaleTimeString(); // Get the formatted time (e.g., "6:00:00 PM")

  return (
    <div className="forecast-box">
      <h4>📅 {formattedDate}</h4>
      <h4>⏰{formattedTime}</h4>
      <h4>💦{main.humidity}</h4>
      <h4>🌡️{main.temp} degrees</h4>
    </div>
  );
}

export default ForecastItem;
