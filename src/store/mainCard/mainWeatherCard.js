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
    ParentCity: "",
    ParentCountry: "",
  },
  reducers: {
    CardCallSuccess: (mainWeatherCard, action) => {
      const {
        key,
        city,
        country,
        date,
        temp,
        desc,
        icon,
        ParentCity,
        ParentCountry,
      } = action.payload;
      mainWeatherCard.key = key;
      mainWeatherCard.city = city;
      mainWeatherCard.country = country;
      mainWeatherCard.date = date;
      mainWeatherCard.temp = temp;
      mainWeatherCard.desc = desc;
      mainWeatherCard.icon = icon;
      mainWeatherCard.ParentCity = ParentCity;
      mainWeatherCard.ParentCountry = ParentCountry;
    },
  },
});

export const { CardCallSuccess } = slice.actions;
export default slice.reducer;
