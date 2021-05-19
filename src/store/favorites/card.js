import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    cardAdded: (cards, action) => {
      const { city } = action.payload;
      cards.push({
        id: ++lastId,
        city,
      });
    },
  },
});

export const { cardAdded } = slice.actions;
export default slice.reducer;

export const getFavoritesCards = () =>
  createSelector(
    (state) => state.entities.favoritesCards,
    (favoritesCards) => favoritesCards
  );
