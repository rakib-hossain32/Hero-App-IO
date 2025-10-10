import React from "react";
import { NavLink } from "react-router";
import Play from "../assets/play.png";
import appStore from "../assets/appStore.png";
import Hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className=" text-center">
        <h1 className=" font-bold text-[#001931] text-7xl">
          We Build <br />
          <span className=" font-black  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent max-md:text-6xl">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className=" text-[#627382] text-xl mt-4 max-w-[1000px] mx-auto">
          At GELO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className=" flex items-center gap-4 justify-center my-8">
          <NavLink
            to="https://play.google.com/store/apps?hl=en"
            target="blank"
            className="text-[#001931] font-semibold md:text-xl flex items-center gap-2 btn py-6"
          >
            {" "}
            <img src={Play} alt="" className="" /> Google Play
          </NavLink>
          <NavLink
            to="https://www.apple.com/app-store/"
            target="blank"
            className="text-[#001931] font-semibold md:text-xl flex items-center gap-2 btn py-6"
          >
            {" "}
            <img src={appStore} alt="" className=" " /> App Store
          </NavLink>
        </div>
        <img src={Hero} alt="" className="  inline " />
      </div>
      <div className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] py-20">
        <div className=" w-10/12 mx-auto">
          <h3 className=" font-bold text-5xl text-center mb-10">
            Trusted by Millions, Built for You
          </h3>
          <div className=" text-center flex justify-center gap-5 md:gap-10 lg:gap-40">
            <div className="">
              <p className=" text-white opacity-80">Total Downloads</p>
              <h1 className="font-extrabold text-[34px] md:text-[44px] lg:text-[64px] text-white">29.6M</h1>
              <p className="text-white opacity-80">21% more than last month</p>
            </div>
            <div className="">
              <p className=" text-white opacity-80">Total Reviews</p>
              <h1 className="font-extrabold text-[34px] md:text-[44px] lg:text-[64px] text-white">906K</h1>
              <p className="text-white opacity-80">46% more than last month</p>
            </div>
            <div className="">
              <p className=" text-white opacity-80">Active Apps</p>
              <h1 className="font-extrabold text-[34px] md:text-[44px] lg:text-[64px] text-white">132+</h1>
              <p className="text-white opacity-80">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// text-[#001931]
