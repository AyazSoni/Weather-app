import React, { useState, useEffect } from 'react';
import humidityIcon from "../Images/humidity.png";
import windIcon from "../Images/wind.png";
import "../CSS/WeatherDisplay.css";

// Weather Icons
import clearIcon from "../Images/clear.png";
import cloudsIcon from "../Images/clouds.png";
import drizzleIcon from "../Images/drizzle.png";
import mistIcon from "../Images/mist.png";
import rainIcon from "../Images/rain.png";
import snowIcon from "../Images/snow.png";

// WeatherDisplay component to show weather information
const WeatherDisplay = ({ weatherData }) => {
  
  // State variable to manage the weather icon dynamically
  const [weatherIcon, setWeatherIcon] = useState("");
// for converting Temprature unit °C to °F and vise versa
  const [isCelsius, setIsCelsius] = useState(true);

  // Effect to update the weather icon based on the current weather condition
  useEffect(() => {
    switch (weatherData.weather[0].main) {
      case 'Clouds':
        setWeatherIcon(cloudsIcon);
        break;
      case 'Clear':
        setWeatherIcon(clearIcon);
        break;
      case 'Rain':
        setWeatherIcon(rainIcon);
        break;
      case 'Drizzle':
        setWeatherIcon(drizzleIcon);
        break;
      case 'Mist':
        setWeatherIcon(mistIcon);
        break;
      case 'Snow':
        setWeatherIcon(snowIcon);
        break;
      default:
        setWeatherIcon(cloudsIcon);
    }
  }, [weatherData.weather[0].main]); // Run only when weather condition changes
  
  
  //for converting Temprature unit °C to °F and vise versa
  const convertTemperature = () => {
    return isCelsius ? weatherData.main.temp : (weatherData.main.temp * 9/5) + 32;
  };
 
 
  

  return (
    <div>
     {/*for converting Temprature unit °C to °F and vise versa*/}
     <div class="toggle-container" >
         <input type="checkbox" id="unitToggle" class="toggle-input"  
          onChange={()=> setIsCelsius(!isCelsius)}
          />
         <label for="unitToggle" class="toggle-label" >
        <div class="toggle-slider"></div>
         </label>
    </div >

      <div className="weather">
        <h4>{weatherData.weather[0].description}</h4>
        {/*image depend on weather means rain , snow cloudy*/}
        <img src={weatherIcon} alt="weather icon" className="weather-icon"/>
        {/*Temprature Information*/}
        <h1> {convertTemperature().toFixed(2)}°{isCelsius ? 'C' : 'F'}</h1>
        {/*City Name*/}
        <h2 className="city">{weatherData.name}</h2>
        <div className="details">
          {/* Humidity Information */}
          <div className="container">
            <img src={humidityIcon} alt="humidity icon" />
            <div>
              <p className="humidity">{weatherData.main.humidity}%</p>
              <p className="inf-hum-win">Humidity</p>
            </div>
          </div>
          {/* Wind Speed Information */}
          <div className="container">
            <img src={windIcon} alt="wind icon" />
            <div>
              <p className="wind">{weatherData.wind.speed}km/h</p>
              <p className="inf-hum-win">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
