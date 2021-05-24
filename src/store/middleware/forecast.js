import axios from "axios";
import { forecastUrl, apiKey } from "../../config.json";
import * as actions from "../currentWeather/api";
import { forecastWeatherCarsdData } from "../currentWeather/weather";

const forecast =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.weatherForecastCallBegan.type)
      return next(action);

    const { Key } = action.payload;
    next(action);

    try {
      const response = await axios.request({
        baseURL: `${forecastUrl}/${Key}?apikey=${apiKey}&details=true&metric=true`,
      });
      dispatch(actions.weatherForecastCallSuccess(response.data));
      dispatch(forecastWeatherCarsdData());
    } catch (error) {
      console.log(error.messages);
    }
  };

export default forecast;
