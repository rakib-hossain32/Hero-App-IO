import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const navigate = useNavigate();
  // console.log(app);

  const { downloads, ratingAvg, title, id } = app;

  const million = downloads / 1000000;

  // console.log(million);

  return (
    <div>
      <div
        onClick={() => navigate(`/app-details/${id}`, { state: app })}
        className=" flex flex-col p-5 border border-gray-100 rounded-3xl hover:scale-105 hover:shadow-2xl transition ease-in-out cursor-pointer bg-white"
      >
        <img
          src={app.image}
          alt=""
          className="  rounded-3xl overflow-hidden   object-contain  aspect-2/2 container   "
        />
        <h1 className=" my-3 text-xl font-medium text-[#001931]">{title}</h1>
        <div className=" flex justify-between items-center">
          <div className=" bg-[#F1F5E8] px-2.5 py-1.5 flex items-center gap-2 text-[#00D390] rounded-lg">
            <img src={download} alt="" className=" max-w-4" />
            <p className=" font-medium">{million}M</p>
          </div>
          <div className=" bg-[#FFF0E1] px-2.5 py-1.5 flex items-center gap-2 text-[#FF8811] rounded-lg">
            <img src={rating} alt="" className=" max-w-4" />
            <p className=" font-medium">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
