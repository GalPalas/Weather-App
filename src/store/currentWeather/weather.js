import { createSlice } from "@reduxjs/toolkit";
import { geoPositionCallBegan } from "./api";
import { dataWasBrought } from "../../config.json";
import { createSelector } from "reselect";
import { weatherCardCallSuccess } from "../mainCard/actions";
import { forecastCardCallSuccess } from "../forecastCards/actions";
import { dateBuilder } from "../../components/utils";
import { toast } from "react-toastify";
import moment from "moment";
import _ from "lodash";

const slice = createSlice({
  name: "weather",
  initialState: {
    coordinates: [],
    conditions: [],
    forecast: [],
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
    forecastCallSuccess: (weather, action) => {
      weather.forecast = action.payload;
    },
  },
});

export const {
  callRequested,
  callSuccess,
  callFailed,
  geoCallSuccess,
  searchCallSuccess,
  forecastCallSuccess,
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

/*------------------- Selectors section -------------------------------*/
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

export const getForecast = () =>
  createSelector(
    (state) => state.entities.weather.forecast,
    (forecast) => forecast
  );
/*-------------------End Selectors section -------------------------------*/

/*-------------------------- Current weather main card section --------------------------------------*/
export const mainWeatherCardData = () => (dispatch, getState) => {
  const { coordinates, conditions } = getState().entities.weather;

  const ParentCity = _.get(coordinates, "ParentCity.EnglishName");
  const ParentCountry = _.get(coordinates, "AdministrativeArea.EnglishName");

  const key = _.get(coordinates, "Key");
  const city = _.get(coordinates, "EnglishName");
  const country = _.get(coordinates, "Country.ID");
  const date = dateBuilder(new Date());
  const temp = Math.round(_.get(conditions, "[0].Temperature.Metric.Value"));
  const desc = _.get(conditions, "[0].WeatherText");
  const icon = _.get(conditions, "[0].WeatherIcon");

  dispatch(
    weatherCardCallSuccess({
      key,
      city,
      country,
      date,
      temp,
      desc,
      icon,
      ParentCity,
      ParentCountry,
    })
  );
};

export const getMainWeatherCardData = () =>
  createSelector(
    (state) => state.entities.weatherCard,
    (weatherCard) => weatherCard
  );
/*-------------------------- End Current weather main card section --------------------------------------*/

/*-------------------------- Weather forecast section -------------------------------------------*/
export const forecastWeatherCarsdData = () => (dispatch, getState) => {
  const { coordinates, conditions } = getState().entities.weather;

  const ParentCity = _.get(coordinates, "ParentCity.EnglishName");
  const ParentCountry = _.get(coordinates, "AdministrativeArea.EnglishName");

  const key = _.get(coordinates, "Key");
  const city = _.get(coordinates, "EnglishName");
  const country = _.get(coordinates, "Country.ID");
  const date = dateBuilder(new Date());
  const temp = Math.round(_.get(conditions, "[0].Temperature.Metric.Value"));
  const desc = _.get(conditions, "[0].WeatherText");
  const icon = _.get(conditions, "[0].WeatherIcon");

  dispatch(
    forecastCardCallSuccess({
      key,
      city,
      country,
      date,
      temp,
      desc,
      icon,
      ParentCity,
      ParentCountry,
    })
  );
};

export const getDailyForecasts = () =>
  createSelector(
    (state) => state.entities.weather.forecast.DailyForecasts,
    (DailyForecasts) => DailyForecasts
  );

export const getForecastsCardData = () =>
  createSelector(
    (state) => state.entities.forecastCard,
    (forecastCard) => forecastCard
  );

/*-------------------------- End Weather forecast section -------------------------------------------*/
