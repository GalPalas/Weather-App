import { combineReducers } from "redux";
import weatherReducer from "../store/currentWeather/weather";
import locationReducer from "../store/geoPosition/location";

export default combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});
