import React, { useState } from "react";
import addimg from "../assests/additem.png";
// import foodbg from "../assests/foodbg.jpg";

const Ingredients = () => {
  const [ingredientName, setIngredientName] = useState("");
  return (
    <div className="w-3/4  py-3 px-10 text-slate-800">
      <div className=" p-8 bg-[#e3e3e146]  flex justify-between rounded-xl">
        <div className="w-3/4">
          <h2 className="text-2xl font-Inter my-4">
            Fill Up your Pantry List !!
          </h2>
          <input
            type="text"
            className="border border-gray-600 px-2 py-1 rounded-l-lg w-2/5"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
          />
          <button className="bg-green-600 px-2 py-[0.3rem] rounded-r-lg text-white font-bold">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
        <div>
          <img src={addimg} alt="ingredient pot" className="h-32" />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
