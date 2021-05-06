import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import locationKey from "./middleware/locationKey";
import coordinates from "./middleware/coordinates";
import citySearch from "./middleware/citySearch";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      coordinates,
      locationKey,
      citySearch,
    ],
  });
}
