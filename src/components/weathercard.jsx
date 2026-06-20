import React, { useEffect, useState } from 'react';
import './weathercard.css';
import searchicon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

function Weathercard() {

  const [city, setCity] = useState("");
  const [weatherstats, setWeatherstats] = useState(false);

  const allicons = {
    "01d": clear_icon, "01n": clear_icon,
    "02d": cloud_icon, "02n": cloud_icon,
    "03d": cloud_icon, "03n": cloud_icon,
    "04d": drizzle_icon, "04n": drizzle_icon,
    "09d": rain_icon, "09n": rain_icon,
    "10d": rain_icon, "10n": rain_icon,
    "13d": snow_icon, "13n": snow_icon,
  };

  const search = async (cityName) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        console.log("City not found");
        return;
      }

      const icon = allicons[data.weather[0].icon] || clear_icon;

      setWeatherstats({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  const handleSearch = () => {
    if (city.trim() === "") return;
    search(city);
  };

  return (
    <div className="weathercard">

      <div className="searchbar">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <img src={searchicon} alt="search" onClick={handleSearch} />
      </div>

      {weatherstats && (
        <>
          <div className="weathericon">
            <img src={weatherstats.icon} alt="weather" />
          </div>

          <div className="weatherdetails">
            <div className="temperature"><p>{weatherstats.temperature}°C</p></div>
            <div className="location"><p>{weatherstats.location}</p></div>
          </div>

          <div className="weatherstats">
            <div className="coln">
              <img src={humidity_icon} alt="" />
              <p>{weatherstats.humidity}%</p>
              <span>Humidity</span>
            </div>

            <div className="coln">
              <img src={wind_icon} alt="" />
              <p>{weatherstats.windspeed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Weathercard;