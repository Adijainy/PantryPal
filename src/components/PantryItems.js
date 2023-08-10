import React from "react";
import chefImg from "../assests/Cookpink.png";

const PantryItems = () => {
  return (
    <div className="w-1/4 py-3 px-10 text-slate-800">
      <h2 className="text-2xl font-Inter my-4">My Pantry List</h2>
      <img alt="chef" src={chefImg} className="h-2/4" />
    </div>
  );
};

export default PantryItems;
