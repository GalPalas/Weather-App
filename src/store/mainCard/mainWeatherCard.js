import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mainWeatherCard",
  initialState: {
    key: "",
    city: "",
    country: "",
    date: "",
    temp: "",
    desc: "",
    icon: "",
  },
  reducers: {
    CardCallSuccess: (mainWeatherCard, action) => {},
  },
});

export const { CardCallSuccess } = slice.actions;
export default slice.reducer;
