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
    CardCallSuccess: (mainWeatherCard, action) => {
      const { key, city, country, date, temp, desc, icon } = action.payload;
      mainWeatherCard.key = key;
      mainWeatherCard.city = city;
      mainWeatherCard.country = country;
      mainWeatherCard.date = date;
      mainWeatherCard.temp = temp;
      mainWeatherCard.desc = desc;
      mainWeatherCard.icon = icon;
    },
  },
});

export const { CardCallSuccess } = slice.actions;
export default slice.reducer;
