import React from "react";

const Footer = () => {
  return (
    <div className="w-full -mt-32">
      <div className="bg-footer-light h-12">
        <h1 className="text-headerText-white text-center pt-3">Back to top</h1>
      </div>
      <div className="bg-footer-dark flex justify-evenly text-headerText-white text-xs h-96 items-start pt-4 footerelements">
        <div className="flex flex-col justify-around">
          <ul>
            <li className="font-bold text-lg pb-2">Get to know us</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>UK Modern Slavery Statement</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="flex flex-col justify-around">
          <ul>
            <li className="font-bold text-lg pb-2">Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell Under Private Brands</li>
            <li>Sell on Amazon Business</li>
            <li>Sell on Amazon Handmade</li>
          </ul>
        </div>
        <div className="flex flex-col justify-around">
          <ul>
            <li className="font-bold text-lg pb-2">Amazon Payment Methods</li>
            <li>Amazon Platinum Mastercard</li>
            <li>Amazon Classic Mastercard</li>
            <li>Amazon Money Store</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="flex flex-col justify-around">
          <ul>
            <li className="font-bold text-lg pb-2">Let Us Help You</li>
            <li>Track Packages or View Orders</li>
            <li>Delivery Rates & Policies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
