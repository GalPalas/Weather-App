import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { dataWasBrought } from "../../config.json";
import moment from "moment";

const slice = createSlice({
  name: "currentWeather",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    callRequested: (weather, action) => {
      weather.loading = true;
    },
    callSuccess: (weather, action) => {
      weather.list = action.payload;
      weather.loading = false;
      weather.lastFetch = Date.now();
    },
    callFailed: (weather, action) => {
      weather.loading = false;
    },
  },
});

export const { callRequested, callSuccess, callFailed } = slice.actions;
export default slice.reducer;

export const loadWeatherData = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.weather;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < dataWasBrought) return; // change the number and and this to config file

  dispatch(apiCallBegan()); //send here path
};
