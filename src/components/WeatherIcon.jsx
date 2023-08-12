import React from "react";
import { FiSun, FiCloud, FiWind } from "react-icons/fi"; // Import the necessary icons

const weatherIcons = {
  "01d": <FiSun />,
  "02d": <FiCloud />,
  "03d": <FiCloud />,
  "04d": <FiCloud />,
  "50d": <FiWind />,
};

function WeatherIcon({ code }) {
  return (
    <>
      <div className=".weather-icon"></div>
      {weatherIcons[code]}
    </>
  );
}

export default WeatherIcon;
