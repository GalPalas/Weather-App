import { createAction } from "@reduxjs/toolkit";

/* Actions for current weather*/
export const apiCallRequested = createAction("weather/callRequested");
export const apiCallBegan = createAction("weather/callBegan");
export const apiCallSuccess = createAction("weather/callSuccess");
export const apiCallFailed = createAction("weather/callFailed");

/* Actions for coordinates*/
export const geoPositionCallBegan = createAction("weather/geoCallBegan");
export const geopositionCallSuccess = createAction("weather/geoCallSuccess");
export const geopositionCallFailed = createAction("weather/geoCallFailed");
