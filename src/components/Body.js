import React from "react";
import Ingredients from "./Ingredients";
import PantryItems from "./PantryItems";

const Body = () => {
  return (
    <div className="flex">
      <Ingredients />
      <PantryItems />
    </div>
  );
};

export default Body;
