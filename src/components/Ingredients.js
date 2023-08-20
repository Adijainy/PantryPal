import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addimg from "../assests/Delivery.png";
import { addItem } from "../utils/ingredientsSlice";

const Ingredients = () => {
  const [ingredientName, setIngredientName] = useState("");

  const dispatch = useDispatch();

  const handleAddClick = (ingredientName) => {
    dispatch(addItem(ingredientName));
    setIngredientName("");
  };

  return (
    <div className="w-2/5 py-3 px-10 text-slate-800  ">
      <div className=" p-6 pb-10 bg-white  flex justify-between rounded-xl mb-6 relative">
        <div className="w-3/4">
          <h2 className="text-2xl font-Inter mb-4">
            Fill Up your Pantry List !!
          </h2>
          <input
            type="text"
            className="border border-gray-600 px-2 py-1 rounded-l-lg w-2/4"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
          />
          <button
            className="bg-green-600 px-2 py-[0.3rem] rounded-r-lg text-white font-bold"
            onClick={() => handleAddClick(ingredientName)}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
        <div className="absolute right-4 top-[-4rem]">
          <img src={addimg} alt="ingredient" className="h-64" />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
