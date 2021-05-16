import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    cardAdded: (cards, action) => {
      cards.push({
        id: ++lastId,
        city: action.payload,
      });
    },
  },
});

export const { cardAdded } = slice.actions;
export default slice.reducer;
