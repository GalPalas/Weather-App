import axios from "axios";
import { apiUrl, apiKey } from "../../config.json";
import * as actions from "../currentWeather/api";

const locationKey = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  dispatch(actions.apiCallRequested());

  next(action);

  try {
    const response = await axios.request({
      baseURL: `${apiUrl}/328328?apikey=${apiKey}`,
    });
    dispatch(actions.apiCallSuccess(response.data));
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message));
  }
};

export default locationKey;
