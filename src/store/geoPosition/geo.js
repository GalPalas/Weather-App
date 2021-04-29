import { createAction } from "@reduxjs/toolkit";

export const geopositionCallRequested = createAction(
  "location/geoCallRequested"
);
export const geopositionCallBegan = createAction("location/geoCallBegan");
export const geopositionCallSuccess = createAction("location/geoCallSuccess");
export const geopositionCallFailed = createAction("location/geoCallFailed");
