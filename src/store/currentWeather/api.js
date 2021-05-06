import { createAction } from "@reduxjs/toolkit";

/* Actions for current weather*/
export const apiCallRequested = createAction("weather/callRequested");
export const apiCallBegan = createAction("weather/callBegan");
export const apiCallSuccess = createAction("weather/callSuccess");
export const apiCallFailed = createAction("weather/callFailed");

/* Actions for coordinates*/
export const geoPositionCallBegan = createAction("weather/geoCallBegan");
export const geopositionCallSuccess = createAction("weather/geoCallSuccess");

/* Actions for get location key by city name sreach */
export const citySearchCallBegan = createAction("weather/searchCallBegan");
export const citySearchCallSuccess = createAction("weather/searchCallSuccess");
export const citySearchCallFailed = createAction("weather/searchCallFailed");
