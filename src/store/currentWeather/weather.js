import { createSlice } from "@reduxjs/toolkit";
import { geoPositionCallBegan } from "./api";
import { dataWasBrought } from "../../config.json";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import moment from "moment";

const slice = createSlice({
  name: "weather",
  initialState: {
    conditions: [],
    coordinates: [],
    search: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    callRequested: (weather, action) => {
      weather.loading = true;
    },
    callSuccess: (weather, action) => {
      weather.conditions = action.payload;
      weather.loading = false;
      weather.lastFetch = Date.now();
    },
    callFailed: (weather, action) => {
      weather.loading = false;
    },
    geoCallSuccess: (weather, action) => {
      weather.coordinates = action.payload;
    },
    searchCallSuccess: (weather, action) => {
      weather.search = action.payload;
    },
  },
});

export const {
  callRequested,
  callSuccess,
  callFailed,
  geoCallSuccess,
  searchCallSuccess,
} = slice.actions;
export default slice.reducer;

/* Get the current position by lan & lon */
export const geoPositionData = () => (dispatch, getState) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      broughtData();

      dispatch(
        geoPositionCallBegan({
          lat: latitude,
          lon: longitude,
        })
      );
    });
  } else {
    toast.error("Sorry, position is not available");
  }
};

/* brought updated data after 10 minutes*/
const broughtData = () => (getState) => {
  const { lastFetch } = getState().entities.weather;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < dataWasBrought) return;
};

export const getCoordinates = () =>
  createSelector(
    (state) => state.entities.weather.coordinates,
    (coordinates) => coordinates
  );

export const getConditions = () =>
  createSelector(
    (state) => state.entities.weather.conditions,
    (conditions) => conditions
  );
