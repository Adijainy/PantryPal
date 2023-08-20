import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickedBtn } from "../utils/seeRecipeSlice";

const PantryItems = () => {
  const items = useSelector((store) => store.ingredients.items);
  const [btnClick, setBtnClick] = useState(false);
  const dispatch = useDispatch();
  const clickBtn = () => {
    setBtnClick(true);
    console.log("clicked button");
  };

  useEffect(() => {
    console.log("api call");
    // setBtnClick(false);
  }, [btnClick]);

  return (
    <div className="w-3/5 py-3 px-10 text-slate-800">
      <div className="px-6 pt-6 pb-3  bg-white rounded-lg">
        <h2 className="text-2xl font-Inter mb-1">My Pantry List</h2>
        <ul className="flex flex-wrap">
          {items.length === 0 ? (
            <h3 className="text-gray-400 text-sm">
              your ingredients will appear here
            </h3>
          ) : (
            items.map((item, index) => {
              return (
                <li key={index} className="bg-gray-200 py-1 px-2 m-1 text-sm">
                  {item}
                </li>
              );
            })
          )}
        </ul>
        <button
          className="text-white bg-green-600 px-2 py-1 text-base rounded-lg mt-3"
          onClick={() => clickBtn()}
        >
          See Recipes
        </button>
      </div>
    </div>
  );
};

export default PantryItems;
