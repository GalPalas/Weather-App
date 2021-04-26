import { createAction } from "@reduxjs/toolkit";

export const apiCallRequested = createAction("currentWeather/callRequested");
export const apiCallBegan = createAction("currentWeather/callBegan");
export const apiCallSuccess = createAction("currentWeather/callSuccess");
export const apiCallFailed = createAction("currentWeather/callFailed");
