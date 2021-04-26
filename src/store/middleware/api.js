import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  dispatch(actions.apiCallRequested());

  next(action);

  try {
    const response = await axios.request({
      baseURL:
        "http://dataservice.accuweather.com/locations/v1/328328?apikey=iYRAfMnecHCV8i01yjyD1GgVE6mamwAW",
    });
    dispatch(actions.apiCallSuccess(response.data));
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message));
  }
};

export default api;
