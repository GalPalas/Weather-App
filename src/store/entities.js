import { combineReducers } from "redux";
import weatherReducer from "../store/currentWeather/weather";
import mainWeatherCardReducer from "../store/mainCard/mainWeatherCard";
import forecastWeatherCardReducer from "../store/forecastCards/forecastWeatherCards";
import favoritesCardReducer from "../store/favorites/card";

export default combineReducers({
  weather: weatherReducer,
  weatherCard: mainWeatherCardReducer,
  forecastCard: forecastWeatherCardReducer,
  favoritesCards: favoritesCardReducer,
});
