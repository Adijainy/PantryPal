import { createSlice } from "@reduxjs/toolkit";

const seeRecipeSlice = createSlice({
  name: "recipebtn",
  initialState: {
    btn: "false",
  },
  reducers: {
    seeRecipe: (state) => {
      state.btn = true;
    },
    clickedBtn: (state, action) => {
      state.btn = action.payload;
    },
  },
});

export default seeRecipeSlice.reducer;
export const { seeRecipe, clickedBtn } = seeRecipeSlice.actions;
