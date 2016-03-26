import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatherData(city) {
  const OPENWEATHERMAP_API_KEY = '0564b1fdc771bdff53f2efe7a9e27b88';
  const WEATHER_URL_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&type=like&appid=${OPENWEATHERMAP_API_KEY}`;

  console.log('Sending the fetch weather action');

  return {
    type: FETCH_WEATHER,
    payload: axios.get(WEATHER_URL_ENDPOINT)
  };
}
