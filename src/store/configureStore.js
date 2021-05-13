import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import coordinates from "./middleware/coordinates";
import locationKey from "./middleware/locationKey";
import forecast from "./middleware/forecast";
import citySearch from "./middleware/citySearch";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      coordinates,
      locationKey,
      forecast,
      citySearch,
    ],
  });
}
