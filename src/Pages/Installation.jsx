import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utility/LocalStorage";

import InstallList from "../Components/InstallList";

const Installation = () => {
  const [installLists, setInstallLists] = useState([]);
  const [sortList, setSortList] = useState("");

  const sortLists = (() => {
    if (sortList === "size-desc") {
      return [...installLists].sort((a, b) => b.downloads - a.downloads);
    } else if (sortList === "size-asc") {
      return [...installLists].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installLists;
    }
  })();

  useEffect(() => {
    const savedList = getLocalStorage();
    if (savedList) setInstallLists(savedList);
  }, []);

  // console.log(sortLists);

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center space-y-4 my-8">
        <h2 className="text-[#001931] font-bold text-5xl ">
          Our All Applications
        </h2>
        <p className=" text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className=" flex justify-between items-center mb-8">
        <h3 className=" font-semibold text-2xl text-[#001931]">
          ({installLists.length}) Apps Found
        </h3>
        <label className=" form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortList}
            onChange={(e) => setSortList(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-desc">High-&gt;Low</option>
            <option value="size-asc">Low-&gt;High</option>
          </select>
        </label>
      </div>
      <div className="">
        {sortLists.map((iList) => (
          <InstallList
            key={iList.id}
            installList={iList}
            setInstallLists={setInstallLists}
          />
        ))}
      </div>
    </div>
  );
};

export default Installation;
