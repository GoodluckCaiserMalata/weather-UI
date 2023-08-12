import React, { useState } from "react";
import { getData, getforecast } from "../data"; // Import both functions
import WeatherUpdates from "./WeatherUpdates";
import Forecast from "./Forecast";

function SearchBar(params) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleOnClick = async () => {
    if (city.trim() === "") {
      alert("Please enter a city before searching.");
      return;
    }

    try {
      const weatherResponse = await getData(city); // Call getData function
      setWeatherData(weatherResponse);

      const forecastResponse = await getforecast(city); // Call getforecast function
      setForecastData(forecastResponse);
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <div className="input-container ">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={handleInputChange}
        />
        <br />
        <div className="button-container">
          <button type="submit" onClick={handleOnClick}>
            Search
          </button>
        </div>
      </div>
      <div>
        <WeatherUpdates weatherData={weatherData} />
      </div>
      <div>
        <Forecast forecastData={forecastData} />
      </div>
    </>
  );
}

export default SearchBar;
