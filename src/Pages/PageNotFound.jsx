import React from "react";
import PageNFound from "../assets/error-404.png";
import { NavLink } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PageNotFound = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-[#F5F5F5] py-9 flex-1">
        <div className="bg-[#F5F5F5] flex items-center justify-center content-center ">
          <div className=" text-center my-9 space-y-5">
            <img src={PageNFound} alt="" className=" inline" />
            <h2 className=" font-semibold text-5xl text-[#001931]">
              Oops, page not found!
            </h2>
            <p className=" text-xl text-[#627382]">
              The page you are looking for is not available.
            </p>
            <NavLink
              to="/"
              className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-4
        px-8 rounded-2xl text-white"
            >
              Go Back!
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
