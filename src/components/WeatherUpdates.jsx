import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherUpdates({ weatherData }) {
  return (
    <div className="weather-data">
      {weatherData && (
        <>
          <div>
            <p style={{ fontSize: 28 }}>
              {" "}
              {weatherData.weather[0].description}
            </p>
            <WeatherIcon code={weatherData.weather[0].icon} />
            <p>
              📍: {weatherData.name}, {weatherData.sys.country}
            </p>

            <p>🌡️: {weatherData.main.temp}°K</p>

            <p>
              ⛅:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </p>

            <p>
              🌙: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherUpdates;
