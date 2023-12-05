// Import necessary components and styles for the WeatherApp
import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import FetchButton from './FetchButton';
import WeatherDisplay from './WeatherDisplay';
import WeatherAPI from './WeatherAPI';
import "../CSS/WeatherApp.css";
import loadingSvg from "../Images/Loding.svg";


// Define the WeatherApp component
const WeatherApp = () => {
  // State variables to manage user input, weather data, loading status, error, and selected unit
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  

  // Async function to fetch weather data based on the user input
  const handleFetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch weather data using the WeatherAPI module
      const data = await WeatherAPI.fetchWeatherData(city);

      // Handle error cases based on the response from the API
      if (data.cod && data.cod !== 200) {
        if (data.cod === '404') {
          alert('City not found. Please enter a valid city name.');
        } else {
          alert(`Error: ${data.message}`);
        }
        setWeatherData(null);
      } else {
        setWeatherData({ ...data });
      }
    } catch (error) {
      // Check for specific error cases and provide user-friendly messages
      if (error.response && error.response.status === 404) {
        setError('City not found. Please enter a valid city name.');
      } else {
        setError('Error fetching weather data. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // JSX 
  return (
    <>
      {/* UnitConverter component for changing temperature units */}

      {/* Main container for the WeatherApp */}
      <div className="App-Container">
        {/* Search section with InputField and FetchButton components */}
        <div className="search">
          <InputField city={city} setCity={setCity} />
          <FetchButton onClick={handleFetchWeather} loading={loading} />
        </div>

        {/* Display weather information or error message based on conditions */}
        {weatherData ?
          (loading ?
            <img src={loadingSvg} alt="loading" />
            :
            <WeatherDisplay weatherData={weatherData} />
          )
          :
          <h3 className="error">{error}</h3>
        }
      </div>
    </>
  );
};

// Export the WeatherApp component 
export default WeatherApp;
