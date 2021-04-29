import axios from "axios";
import { apiUrl, geoEndpoint, apiKey } from "../../config.json";
import * as actions from "../geoPosition/geo";

const geo = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.geopositionCallBegan.type) return next(action);
  const { lat, lon } = action.payload;
  dispatch(actions.geopositionCallRequested());
  next(action);

  try {
    const response = await axios.request({
      baseURL: `${apiUrl}${geoEndpoint}?apikey=${apiKey}&q=${lat}%2C${lon}&details=true`,
    });
    dispatch(actions.geopositionCallSuccess(response.data));
  } catch (error) {
    dispatch(actions.geopositionCallFailed(error.message));
  }
};

export default geo;
