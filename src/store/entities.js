import { combineReducers } from "redux";
import weatherReducer from "../store/currentWeather/weather";
import mainWeatherCardReducer from "../store/mainCard/mainWeatherCard";
import favoritesCardReducer from "../store/favorites/card";

export default combineReducers({
  weather: weatherReducer,
  favoritesCards: favoritesCardReducer,
  weatherCard: mainWeatherCardReducer,
});
