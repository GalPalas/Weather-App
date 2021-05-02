import axios from "axios";
import { apiUrl, apiEndpoint, apiKey } from "../../config.json";
import * as actions from "../currentWeather/api";
import { loadWeatherData } from "../currentWeather/weather";

const geo = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.geoPositionCallBegan.type) return next(action);
  const { lat, lon } = action.payload;
  next(action);

  try {
    const response = await axios.request({
      baseURL: `${apiUrl}${apiEndpoint}?apikey=${apiKey}&q=${lat}%2C${lon}&details=true`,
    });
    dispatch(actions.geopositionCallSuccess(response.data));
    dispatch(loadWeatherData());
  } catch (error) {
    dispatch(actions.geopositionCallFailed(error.message));
  }
};

export default geo;
