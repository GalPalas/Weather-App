import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "forecastWeatherCards",
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
    forecastCardsCallSuccess: (forecastWeatherCards, action) => {
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
      forecastWeatherCards.key = key;
      forecastWeatherCards.city = city;
      forecastWeatherCards.country = country;
      forecastWeatherCards.date = date;
      forecastWeatherCards.temp = temp;
      forecastWeatherCards.desc = desc;
      forecastWeatherCards.icon = icon;
      forecastWeatherCards.ParentCity = ParentCity;
      forecastWeatherCards.ParentCountry = ParentCountry;
    },
  },
});

export const { forecastCardsCallSuccess } = slice.actions;
export default slice.reducer;
