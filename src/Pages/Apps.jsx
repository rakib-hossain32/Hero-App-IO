import React, {  useState } from "react";
import useProducts from "../Hooks/useProducts";
import AppCard from "../Components/AppCard";
import AppNotFound from "./AppNotFound";
import LoadingSpinner from "./LoadingSpinner";

const Apps = () => {
  const { apps, loading } = useProducts();

  // const [search, setSearch] = useState("");
  // const [NotFound, setNotFound] = useState(true);

  // //   console.log(search);
  // const term = search.trim().toLowerCase();

  // const searchedApps = term
  //   ? apps.filter((app) => app.title.toLowerCase().includes(term))
  //   : apps;

  // // console.log(Boolean(search))

  // useEffect(() => {
  //   if (searchedApps.length) {
  //     setNotFound(true);
  //   } else {
  //     setNotFound(false);
  //   }
  // }, [searchedApps]);

  // console.log(Boolean(searchedApps.length))

  const [search, setSearch] = useState("");
  // const [NotFound, setNotFound] = useState(true);
  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
    }, 500);
  };

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  // useEffect(() => {
  //   setNotFound(searchedApps.length > 0);
  // }, [searchedApps]);

  // if(searchedApps){
  //   setNotFound(true)
  // }
  // else{
  //    setNotFound(false)
  // }

  // console.log(NotFound);

  //   const finalApps = searchedApps ? searchedApps : <AppNotFound/>

  //   console.log( Boolean(searchedApps.length))

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
          ({searchedApps.length}) Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
          />
        </label>
      </div>
      {loading || searching ? (
        <LoadingSpinner />
      ) : searchedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <AppNotFound />
      )}
    </div>
  );
};

export default Apps;

// #001931 #627382
