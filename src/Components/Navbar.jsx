import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className=" navbar bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold" : 'font-semibold '}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold" : 'font-semibold '}>
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold" : 'font-semibold '}>
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" flex flex-row-reverse items-center gap-2">
            <NavLink to="/" className=" text-xl   font-black bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent max-sm:hidden">
              HERO.IO
            </NavLink>
            <img src={Logo} alt="" className=" max-w-10 " />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink  to="/" className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold" : 'font-semibold '}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold" : 'font-semibold '}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold" : 'font-semibold '}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="https://github.com/rakib-hossain32"
            target="blank"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white flex items-center gap-2"
          >
            <FaGithub /> Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
