import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "./ingredientsSlice";
import seeRecipeSlice from "./seeRecipeSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    seeRecipe: seeRecipeSlice,
  },
});

export default store;
