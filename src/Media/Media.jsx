import React, { useState } from "react";
import "../Hero/Hero.css";
import { imgAssets } from "../assets/imgAssets";


const Media = () => {
  
  

  return (
    <div className="media h-screen relative">
      <div className="py-[100px] flex">
        <div className="">
          <img
            src={imgAssets.Cricle_media}
            className="circle-roll w-[27%] absolute top-[43%] lg:top-[22%] left-[12%]"
          />
          <img
            src={imgAssets.CamoWife_m_bg}
            className="absolute top-[40%] lg:top-[10%] right-[30%] w-[80%]"
          />
          <img
            src={imgAssets.Media_vid}
            className="absolute top-[50%] opacity-50 z-10 left-[11%] ml-4 hover:ml-0 cursor-pointer hover:opacity-100 transition-all w-[25%]"
          />
          <img
            src={imgAssets.Camo_media}
            className="absolute top-[38%] lg:top-[2%] left-[4.3%] w-[60%]"
          />          
        </div>

        <div className="">
          <img
            src={imgAssets.Circle2}
            className="circle-roll w-[28%] absolute top-[45%] lg:top-[22%] right-[10%]"
          />
          <img
            src={imgAssets.Lucia_m_bg}
            className="absolute top-[40%] lg:top-[10%] left-[30%] w-[80%]"
          />
          <img
            src={imgAssets.Media_aud}
            className="absolute top-[50%] right-[6%] hover:mr-0 mr-5 hover:opacity-100 hover:ml-4 opacity-50 cursor-pointer transition-all w-[25%]"
          />
          <img
            src={imgAssets.Lucia_media}
            className="absolute top-[40%] lg:top-[10%] right-[19.3%] w-[38%] "
          />
        </div>
      </div>
    
    </div>

  );
};

export default Media;
