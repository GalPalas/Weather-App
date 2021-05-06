import axios from "axios";
import * as actions from "../currentWeather/api";
import { apiUrl, apiEndpoint, apiKey } from "../../config.json";
import { toast } from "react-toastify";
import _ from "lodash";

const geo = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.geoPositionCallBegan.type) return next(action);
  const { lat, lon } = action.payload;
  next(action);

  try {
    const response = await axios.request({
      baseURL: `${apiUrl}/${apiEndpoint}?apikey=${apiKey}&q=${lat}%2C${lon}&details=true`,
    });
    dispatch(actions.geopositionCallSuccess(response.data));

    const Key = _.get(response.data, "Key");
    dispatch(actions.apiCallBegan({ Key }));
  } catch (error) {
    toast.error(error.message);
  }
};

export default geo;
