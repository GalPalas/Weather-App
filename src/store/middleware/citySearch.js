import axios from "axios";
import { apiUrl, cityEndpoint, apiKey } from "../../config.json";
import { toast } from "react-toastify";
import * as actions from "../currentWeather/api";
import _ from "lodash";

const citySearch = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.citySearchCallBegan.type) return next(action);

  const { cityName } = action.payload;
  next(action);

  try {
    const response = await axios.request({
      baseURL: `${apiUrl}/${cityEndpoint}?apikey=${apiKey}&q=${cityName}`,
    });
    dispatch(actions.citySearchCallSuccess(response.data));

    const { Latitude, Longitude } = _.get(response.data, "[0].GeoPosition");
    dispatch(
      actions.geoPositionCallBegan({
        lat: Latitude,
        lon: Longitude,
      })
    );
  } catch (error) {
    toast.error(error.message);
  }
};

export default citySearch;
