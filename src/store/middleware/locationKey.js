import axios from "axios";
import { geoUrl, geoEndpoint, apiKey } from "../../config.json";
import * as actions from "../currentWeather/api";
import { mainWeatherCardData } from "../currentWeather/weather";

const locationKey =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const { Key } = action.payload;

    dispatch(actions.apiCallRequested());
    next(action);

    try {
      const response = await axios.request({
        baseURL: `${geoUrl}/${geoEndpoint}/${Key}?apikey=${apiKey}&details=true`,
      });
      dispatch(actions.apiCallSuccess(response.data));
      dispatch(mainWeatherCardData());
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
    }
  };

export default locationKey;
