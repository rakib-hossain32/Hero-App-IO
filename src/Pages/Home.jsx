import React from "react";
import useProducts from "../Hooks/useProducts";
import Banner from "./Banner";
import { NavLink } from "react-router";
import AppCard from "../Components/AppCard";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const { apps, loading } = useProducts();

  // console.log(loading);

  const trendingApps = apps.slice(0, 8);
  // console.log(trendingApps);
  //   const { image, title } = apps;
  return (
    <div className=" ">
      <Banner />

      <div className=" w-11/12 mx-auto">
        <div className=" text-center my-12">
          <h2 className=" font-bold text-5xl text-[#001931] mb-5">
            Trending Apps
          </h2>
          <p className=" text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us{" "}
          </p>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
        <div className=" text-center my-12">
          <NavLink
            to="/apps"
            className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-4
        px-8 rounded-2xl text-white"
          >
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
