// Import the axios library for making HTTP requests
import axios from 'axios';

// Define a module for handling weather-related API calls
const WeatherAPI = {
  // Async function to fetch weather data based on a given city
  fetchWeatherData: async (city) => {
    try {
      // Retrieve the API key from the environment variables
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

      // Construct the API URL with the provided city, API key, and unit settings
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      // Make an asynchronous GET request to the OpenWeatherMap API
      const response = await axios.get(apiUrl);

      // Return the weather data extracted from the API response
      return response.data;
    } catch (error) {
      // If an error occurs during the API call, propagate the error
      throw error;
    }
  },
};

// Export the WeatherAPI module for use in other parts of the application
export default WeatherAPI;
