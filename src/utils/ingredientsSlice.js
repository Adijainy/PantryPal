import { createSlice } from "@reduxjs/toolkit";

const ingredientSlice = createSlice({
  name: "ingredients",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export default ingredientSlice.reducer;
export const { addItem, removeItem, clearItem } = ingredientSlice.actions;
