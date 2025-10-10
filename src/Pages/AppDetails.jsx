import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getLocalStorage, setLocalStorage } from "../utility/LocalStorage";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const location = useLocation();
  //   console.log(location.state);

  // const {id} = useParams()

  // const {apps} = useProducts()

  // console.log(apps)

  // const findApp = apps.find(a=> String(a.id) == id)

  // console.log(findApp)

  // console.log(id)

  const app = location.state;

  const [installed, setInstalled] = useState(false);
  //   const [disable, setDisable] = useState(false);

  const handleInstall = (app) => {
    setLocalStorage(app);
    setInstalled(true);
    toast.success("Wow! Installed App");
  };

  const {
    ratings,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    companyName,
    title,
    image,
  } = app;

  // useEffect(() => {
  //   const getLocalStored = getLocalStorage();

  //   console.log(getLocalStored);

  //   const findLocalStorage = getLocalStored.find((a) => a.id === app.id);
  //   // console.log(findLocalStorage);
  //   if (findLocalStorage) {
  //     //   setDisable(true);
  //     setInstalled(true);
  //   }

  //   // console.log(getLocalStored)
  // }, [app]);

  useEffect(() => {
    const getLocalStored = getLocalStorage();
    const findLocalStorage = getLocalStored.find((a) => a.id === app.id);
    if (findLocalStorage) {
      setInstalled(true);
    }
  }, [app]);

  //   console.log(ratings);

  const sortedRatings = [...ratings].sort((a, b) => b.count - a.count);

  const thousand = reviews / 1000;

  const million = downloads / 1000000;

  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="  flex md:flex-col flex-col lg:flex-row gap-20 items-center">
        <div className=" shadow-2xl p-6 rounded-3xl max-w-[350px]">
          <img
            src={image}
            alt=""
            className=" w-[300px] rounded-3xl  container object-contain "
          />
        </div>
        <div className="  w-full">
          <h2 className=" font-bold text-4xl text-[#001931] mb-3">{title}</h2>
          <p className=" text-[#627382] text-xl">
            Developed by{" "}
            <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <hr className=" border-b border-[#001931] opacity-20 my-8" />
          <div className=" flex items-center gap-10 md:gap-22 lg:gap-24">
            <div className="space-y-2 text-center">
              <img src={download} alt="" className=" inline" />
              <p className=" text-[#001931]">Downloads</p>
              <h1 className=" font-extrabold lg:text-[40px] text-[#001931]">
                {million}M
              </h1>
            </div>
            <div className="space-y-2 text-center">
              <img src={rating} alt="" className=" inline" />
              <p className=" text-[#001931]">Average Ratings</p>
              <h1 className=" font-extrabold lg:text-[40px] text-[#001931]">
                {ratingAvg}
              </h1>
            </div>
            <div className="space-y-2 text-center">
              <img src={review} alt="" className=" inline" />
              <p className=" text-[#001931]">Total Reviews</p>
              <h1 className=" font-extrabold lg:text-[40px] text-[#001931]">
                {thousand}K
              </h1>
            </div>
          </div>
          <button
            onClick={() => handleInstall(app)}
            disabled={installed}
            className={`font-semibold text-xl rounded-xl py-3.5 px-5 mt-7 text-white 
        ${installed ? "bg-[#4f917c] cursor-not-allowed" : "bg-[#00D390]"}`}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className=" border-b border-[#001931] opacity-20 my-12" />
      <div className="">
        <h3 className=" font-semibold text-2xl mb-6">Ratings</h3>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={sortedRatings} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#ff9800" barSize={35} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <hr className=" border-b border-[#001931] opacity-20 my-12" />
      <div className="">
        <h3 className=" font-semibold text-2xl text-[#001931] mb-6">
          Description
        </h3>
        <p className="text-[#627382] text-xl">{description}</p>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AppDetails;
// #001931 #627382
