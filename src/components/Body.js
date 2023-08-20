import React from "react";
import Ingredients from "./Ingredients";
import PantryItems from "./PantryItems";
import RecipeContainer from "./RecipeContainer";

const Body = () => {
  return (
    <div className="mt-10">
      <div className="flex">
        <Ingredients />
        <PantryItems />
      </div>

      <RecipeContainer />
    </div>
  );
};

export default Body;
