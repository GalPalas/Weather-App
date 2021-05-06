import { combineReducers } from "redux";
import weatherReducer from "../store/currentWeather/weather";
import mainWeatherCardReducer from "../store/mainCard/mainWeatherCard";

export default combineReducers({
  weather: weatherReducer,
  weatherCard: mainWeatherCardReducer,
});
