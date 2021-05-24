import { createAction } from "@reduxjs/toolkit";

export const forecastCardCallBegan = createAction(
  "forecastWeatherCards/forecastCardsCallBegan"
);
export const forecastCardCallSuccess = createAction(
  "forecastWeatherCards/forecastCardsCallSuccess"
);
export const forecastCardCallFailed = createAction(
  "forecastWeatherCards/forecastCardsCallFailed"
);
