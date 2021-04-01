import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrStar } from "react-icons/gr";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="relative homegrid">
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            width="100%"
            dynamicHeight={false}
            infiniteLoop
            className="absolute col-start-2 col-end-3"
            renderArrowPrev={(click) => {
              return (
                <IoIosArrowBack
                  className="absolute left-4 top-20 z-10 w-16 h-16 cursor-pointer text-headerText-white"
                  onClick={click}
                />
              );
            }}
            renderArrowNext={(click) => {
              return (
                <IoIosArrowForward
                  className="absolute right-4 top-20 z-10 w-16 h-16 cursor-pointer text-headerText-white"
                  onClick={click}
                />
              );
            }}
          >
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheMauritanian/MAUR_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB655770286_.jpg"
                alt="prime video"
                className="home__image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/EUBluefield/Build_Trust/Amplify_Brand_truths/Sustainability/Turbines/DesktopHero_1500x600_Turbines_UK._CB657457005_.jpg"
                alt="carbon"
                className="home__image"
              />
            </div>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/primenow/Copperfield/Morrisons/f3vx-2637_M5_Morrisons_Launch_GW_hero_desktop_1500x1600._CB413167649_.jpg"
                alt="grocery"
                className="home__image"
              />
            </div>
          </Carousel>
          <div className="relative top-72 px-4 col-start-2 col-end-3 grid grid-cols-4 grid-rows-4">
            <div className="w-80 h-96 bg-headerText-white row-start-1 row-end-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  New Apple iPad Pro
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£499</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img src="./images/ipad.jpg" alt="ipad" />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-80 h-96 bg-headerText-white row-start-1 row-end-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Premium Hot Tub
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£2199</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img src="./images/jacuzzi.jpg" alt="jacuzzi" />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-80 h-96 bg-headerText-white row-start-1 row-end-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Comfy Office Chair
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£59</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img
                  src="./images/chair.jpg"
                  alt="jacuzzi"
                  className="w-64 h-64 mx-auto"
                />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-full h-96 bg-headerText-white row-start-1 row-end-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Top Deals
                </h2>
                <h3 className="text-lg font-semibold mx-auto">Laptops</h3>
                <img src="./images/laptops.jpg" alt="laptops" />
                <button className="w-1/2 mx-auto rounded-sm mb-2 cursor-pointer text-cartNumber">
                  View Laptops
                </button>
              </div>
            </div>

            <div className="w-full h-auto bg-headerText-white row-start-2 row-end-3 col-start-1 col-end-5 mt-2 mb-6">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Wide Screen Samsung LED 62" Monitor
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£1600</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img
                  src="./images/tv.jpg"
                  alt="tv"
                  className="w-96 h-64 mx-auto"
                />
                <button className="bg-searchIcon-default w-36 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-80 h-96 bg-headerText-white row-start-3 row-end-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Himalayan Salt Lamp
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£32.99</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img
                  src="./images/saltlamp.jpg"
                  alt="saltlamp"
                  className="w-64 h-64 mx-auto"
                />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-80 h-96 bg-headerText-white row-start-3 row-end-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Kitchen Mixer
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£45</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img
                  src="./images/kitchenmixer.jpg"
                  alt="mixer"
                  className="w-64 h-64 mx-auto"
                />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-80 h-96 bg-headerText-white row-start-3 row-end-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Surfboard
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£23</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img
                  src="./images/surfboard.jpg"
                  alt="surfboard"
                  className="w-64 h-64 mx-auto"
                />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            <div className="w-80 h-96 bg-headerText-white row-start-3 row-end-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mx-auto mt-2">
                  Dyson Fan
                </h2>
                <h3 className="text-lg font-semibold mx-auto">£250</h3>
                <span className="flex text-cartNumber mx-auto">
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                  <GrStar className="w-6 h-6" />
                </span>
                <img
                  src="./images/fan.jpg"
                  alt="fan"
                  className="w-64 h-64 mx-auto"
                />
                <button className="bg-searchIcon-default w-1/2 mx-auto rounded-sm mb-2 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>

            {/* divider */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
