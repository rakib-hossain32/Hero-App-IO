import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AppNot from "../assets/App-Error.png";
import { NavLink } from "react-router";

const AppNotFound = () => {
  return (
    <div className="bg-[#F5F5F5] flex items-center justify-center content-center ">
      <div className=" text-center my-9 space-y-5">
        <img src={AppNot} alt="" className=" inline" />
      <h2 className=" font-semibold text-5xl text-[#001931]">OPPS!! APP NOT FOUND</h2>
      <p className=" text-xl text-[#627382]">The App you are requesting is not found on our system.  please try another apps</p>
      <NavLink to='/'
            className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-4
        px-8 rounded-2xl text-white"
          >
            Go Back!
          </NavLink>
      </div>
    </div>
  );
};

export default AppNotFound;
