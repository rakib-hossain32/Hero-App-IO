import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { getLocalStorage } from "../utility/LocalStorage";
import { toast, ToastContainer } from "react-toastify";

const InstallList = ({ installList, setInstallLists }) => {
  const { downloads, ratingAvg, size, title, image, id } = installList;

  //     useEffect(()=>{
  //     const getLocalStored = getLocalStorage()
  //     console.log(getLocalStored)
  //   },[])

  const handleRemoveToLS = (id) => {
    const existList = getLocalStorage();
    toast("Wow! App Uninstall");

    //   toast.success("Wow! Installed App");
    let updatedList = existList.filter((a) => a.id !== id);
    setInstallLists(updatedList);

    localStorage.setItem("installApp", JSON.stringify(updatedList));
  };

  const million = downloads / 1000000;

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between py-5 px-5 bg-white border border-gray-100  rounded-2xl shadow">
        <div className=" flex items-center gap-5">
          <div className="  max-w-20 flex flex-col">
            <img
              src={image}
              alt=""
              className="aspect-2/2 object-contain flex-1  rounded-2xl "
            />
          </div>
          <div className="">
            <h3 className="font-semibold text-xl text-[#001931] mb-4">
              {title}
            </h3>
            <div className=" flex justify-between items-center gap-2 lg:gap-5 max-sm:flex-col">
              <div className=" bg-[#F1F5E8] px-2.5 py-1.5 flex items-center gap-2 text-[#00D390] rounded-lg">
                <img src={download} alt="" className=" max-w-4" />
                <p className=" font-medium">{million}M</p>
              </div>
              <div className=" bg-[#FFF0E1] px-2.5 py-1.5 flex items-center gap-2 text-[#FF8811] rounded-lg">
                <img src={rating} alt="" className=" max-w-4" />
                <p className=" font-medium">{ratingAvg}</p>
              </div>
              <p className="text-[#627382]">{size} MB</p>
            </div>
          </div>
        </div>
        <div className="">
          <button
            onClick={() => handleRemoveToLS(id)}
            className={`font-semibold md:text-xl rounded-xl py-3.5 px-3 md:px-5 text-white bg-[#00D390]`}
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallList;
