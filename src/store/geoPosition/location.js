import { createSlice } from "@reduxjs/toolkit";
import { geopositionCallBegan } from "./geo";
import { toast } from "react-toastify";
import { dataWasBrought } from "../../config.json";
import moment from "moment";

const slice = createSlice({
  name: "location",
  initialState: {
    position: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    geoCallRequested: (location, action) => {
      location.loading = true;
    },
    geoCallSuccess: (location, action) => {
      location.position = action.payload;
      location.loading = false;
      location.lastFetch = Date.now();
    },
    geoCallFailed: (location, action) => {
      location.loading = false;
    },
  },
});

export const { geoCallSuccess } = slice.actions;
export default slice.reducer;

export const geopositionData = () => (dispatch, getState) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log("latitude:", latitude);
      console.log("longitude:", longitude);

      const { lastFetch } = getState().entities.location;

      const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
      if (diffInMinutes < dataWasBrought) return; // change the number and and this to config file

      dispatch(
        geopositionCallBegan({
          lat: latitude,
          lon: longitude,
        })
      );
    });
  } else {
    toast.error("Sorry, position is not available");
  }
};
