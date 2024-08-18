import React, { useState } from "react";
import "../Hero/Hero.css";
import { imgAssets } from "../assets/imgAssets";

const Wallpaper = () => {
  return (
    <div className="wallpaper h-screen relative">
      <div className="flex justify-center items-center gap-3 mx-10 lg:mx-[150px] py-64 lg:py-[100px] ">
        <div className="flex flex-col w-[170vw] gap-3 overflow-hidden">
          <img
            src={imgAssets.wal_7}
            className={`hover:scale-110 transition-all object-cover w-[100%] `}
          />
          <div>
            <img
              src={imgAssets.wal_2}
              className="hover:scale-110 transition-all"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src={imgAssets.wal_3}
            className=" h-[32.4vw] w-[100%] object-cover hover:scale-110 transition-all"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={imgAssets.wal_5}
            className=" h-[32.4vw] object-cover hover:scale-110 transition-all"
          />
        </div>
        <div className="flex flex-col w-[170vw] gap-3 overflow-hidden">
          <img
            src={imgAssets.wal_4}
            className="hover:scale-110 transition-all"
          />
          <img
            src={imgAssets.wal_6}
            className="hover:scale-110 transition-all"
          />
        </div>
      </div>
      <div>
        <img
          src={imgAssets.More_btn}
          className="absolute bottom-[17%] right-[13%] cursor-pointer hover:scale-90 transition-all"
        />
      </div>
    </div>
  );
};

export default Wallpaper;
