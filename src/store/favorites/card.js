import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "favoritesCards",
  initialState: [],
  reducers: {
    cardAdded: (cards, action) => {
      const {
        key,
        city,
        country,
        temp,
        desc,
        icon,
        ParentCity,
        ParentCountry,
      } = action.payload;
      cards.push({
        id: key,
        city,
        country,
        temp,
        desc,
        icon,
        ParentCity,
        ParentCountry,
      });
    },
    cardRemoved: (cards, action) => {
      return cards.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { cardAdded, cardRemoved } = slice.actions;
export default slice.reducer;

export const getFavoritesCards = () =>
  createSelector(
    (state) => state.entities.favoritesCards,
    (favoritesCards) => favoritesCards
  );
