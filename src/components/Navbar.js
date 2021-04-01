import React from "react";

import { IoMdSearch } from "react-icons/io";
import { BiCart, BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-headerBlue-dark items-center">
        <img
          className="h-8 w-28 mt-4 mb-2 mx-6"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
        <input className="h-9 flex-1 rounded-l-md px-2" />
        <div className="w-12 h-9 bg-searchIcon-default rounded-r-md min-w-max">
          <IoMdSearch className="h-full w-full p-1 box-border min-w-max" />
        </div>
        <div className="flex flex-col mx-4 text-headerText-white">
          <p className="text-xs w-max">Hello, Lewis</p>
          <button className="text-sm font-semibold">Sign Out</button>
        </div>
        <h2 className="flex flex-col text-headerText-white text-sm mx-4">
          <span className="font-light text-xs">Returns </span>
          <span className="w-max font-semibold">& Orders</span>
        </h2>
        <div className="mr-4 text-headerText-white flex relative">
          <BiCart className="h-8 w-10 transform scale-x-125" />
          <p className="absolute bottom-9 left-4 text-lg h-2 w-2 text-cartNumber font-bold">
            0
          </p>
          <p className="h-4 transform translate-y-2.5 text-sm font-semibold">
            Basket
          </p>
        </div>
      </nav>
      <nav className="flex bg-headerBlue-light items-center justify-between text-headerText-white text-sm font-normal h-10">
        <div className="flex items-center">
          <div className="flex">
            <BiMenu className="w-8 h-8" />
            <p className="font-semibold h-4 mt-2">All</p>
          </div>
          <h4 className="mx-3 w-max">Prime Video</h4>
          <h4 className="mx-3 w-max">Lewis's Amazon</h4>
          <h4 className="mx-3 w-max">Prime</h4>
          <h4 className="mx-3 w-max">Today's Deals</h4>
          <h4 className="mx-3 w-max">Buy Again</h4>
          <h4 className="mx-3 w-max">Best Sellers</h4>
          <h4 className="mx-3 w-max">Customer Service</h4>
          <h4 className="mx-3 w-max">Gift Ideas</h4>
          <h4 className="mx-3 w-max">Books</h4>
          <h4 className="mx-3 w-max">Morrisons</h4>
          <h4 className="mx-3 w-max">Gift Cards & Top Up</h4>
          <h4 className="mx-3 w-max">New Releases</h4>
          <h4 className="mx-3 w-max">Kindle Books</h4>
        </div>
        <div className="flex text-xl mr-2 w-max whitespace-nowrap">
          <h2 className="border-r-2 pr-2">
            <span className="text-deals">Today's Deals</span>
          </h2>
          <h2 className="pl-2">New deals. Every day.</h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
