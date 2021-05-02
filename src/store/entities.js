import { combineReducers } from "redux";
import weatherReducer from "../store/currentWeather/weather";

export default combineReducers({
  weather: weatherReducer,
});
