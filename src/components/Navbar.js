import React from "react";
import logo from "../assests/logosalad.png";

//bg-[#e8f6e4]

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className=" py-3 pt-5 px-16 flex justify-between text-white ">
        <div className="flex">
          <img className="h-8 mr-2" src={logo} alt="logo" />
          <h2 className="font-Ubuntu text-2xl">PantryPal</h2>
        </div>
        <div>
          <ul className="flex text-lg font-Inter pt-1">
            <li className="mx-2 font-bold">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Recipes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
