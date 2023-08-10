import React from "react";
import logo from "../assests/logosalad.png";

const Navbar = () => {
  return (
    <div className=" py-3 px-16 flex justify-between bg-[#e3e3e146] text-green-600 ">
      <div className="flex">
        <img className="h-8 mr-2" src={logo} alt="logo" />
        <h2 className="font-Ubuntu text-xl">PantryPal</h2>
      </div>
      <div>
        <ul className="flex text-sm font-Inter pt-1">
          <li className="mx-2 font-bold">Home</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Recipes</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
