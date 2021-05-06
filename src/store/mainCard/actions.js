import { createAction } from "@reduxjs/toolkit";

export const weatherCardCallBegan = createAction(
  "mainWeatherCard/CardCallBegan"
);
export const weatherCardCallSuccess = createAction(
  "mainWeatherCard/CardCallSuccess"
);
export const weatherCardCallFailed = createAction(
  "mainWeatherCard/CardCallFailed"
);
