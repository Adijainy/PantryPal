import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickedBtn } from "../utils/seeRecipeSlice";

const RecipeContainer = () => {
  const items = useSelector((store) => store.ingredients.items);
  const call = useSelector((store) => store.seeRecipe.btn);

  const dispatch = useDispatch();

  useEffect(() => {
    // getRecipes();
    // console.log("api call");
    // dispatch(clickedBtn(false));
  }, []);

  return (
    <div className="bg-white rounded-lg mx-10 my-5 p-6 text-slate-800">
      <h1 className="text-2xl font-Inter">Recipes</h1>
    </div>
  );
};

export default RecipeContainer;
