import React, { useState, useEffect } from "react";
import "../Hero/Hero.css";
import { imgAssets } from "../assets/imgAssets";
import { vidAssets } from "../assets/vidAssets";
import { AnimatePresence, delay, motion } from "framer-motion";

const Data = ({ setDataPlay1, setDataPlay2, setDataPlay3, setDataPlay4 }) => {

  const variants = {
    enter: {
      zIndex: 0,
      x: 200,
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -200,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const characters = [
    {
      name: imgAssets.Lucia_name,
      cv: imgAssets.Lucia_cv,
      Dp: imgAssets.Lucia_dp,
    },
    { name: imgAssets.Lee_name, cv: imgAssets.Lee_cv, Dp: imgAssets.Lee_dp },
    {
      name: imgAssets.Bancia_name,
      cv: imgAssets.Bancia_cv,
      Dp: imgAssets.Bancia_dp,
    },
    {
      name: imgAssets.Hangying_name,
      cv: imgAssets.Hangying_cv,
      Dp: imgAssets.Hangying_dp,
    },
  ];
  let bg = "lucia";
  const [char, setChar] = useState(characters[0]);
  if (char === 0) {
    bg = "lucia";
  } else if (char === 1) {
    bg = "lee";
  } else if (char === 2) {
    bg = "bancia";
  } else if (char === 3) {
    bg = "hangying";
  }

  return (
    <div className={`data h-screen relative ${bg} bg-black`}>
      {/* side character */}

      <div className="absolute lg:top-5 right-5 z-50 lg:block flex gap-3 bottom-16">
        {characters.map((char, i) => (
          <div
            key={i}
            className="flex w-[80px] lg:h-auto h-[100px] lg:w-[270px]  mt-5 right-0 lg:right-[20px] hover:scale-105 shadow-lg shadow-zinc-800/50 border opacity-75 hover:opacity-100 transition-all border-red-400/80 rounded-md relative"
            onClick={() => {
              setChar(i);
            }}
          >
            <div className="">
              <img
                src={char.name}
                className="absolute w-full lg:w-[230px] top-5 lg:top-7 left-3"
              />
              <img
                src={char.cv}
                className="absolute bottom-3 left-4 w-[500px] lg:block hidden"
              />
            </div>
            <div>
              <img
                src={char.Dp}
                className="lg:w-[130px] w-[200px] lg:h-auto h-[200px] object-cover lg:mx-[180px]"
              />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {char === 0 ? (
          <div className={`${char === 0 ? "" : "hidden"}`}>
            <div className="absolute lg:bottom-1 bottom-32 right-1">
              <motion.img
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                }}
                src={imgAssets.Lucia_char}
                className="lg:w-[70%] w-[400px] h-[800px] object-cover lg:h-auto"
              />
            </div>
            <div className="absolute top-[55%] lg:top-[13%] left-[46%] lg:left-[15%]">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.Lucia_info}
                className="lg:w-[300px] w-[200px]"
              />
            </div>
            <div className="absolute top-[50%] opacity-25 right-[29%] lg:block hidden">
              <img src={imgAssets.Name_overlay} />
            </div>
            <div className="absolute top-16 lg:top-[53%] right-[60%] lg:right-[32%]">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.ButtonPlay}
                className="hover:scale-110 transition-all cursor-pointer"
                onClick={() => {
                  setDataPlay1(true)
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>

      <AnimatePresence>
        {char === 1 ? (
          <div className={`${char === 1 ? "" : "hidden"}`}>
            <div className="absolute bottom-5 lg:bottom-[-110px] -right-10">
              <motion.img
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                }}
                src={imgAssets.Lee_char}
                className="lg:w-[70%] w-[400px] lg:h-auto h-[800px] object-cover"
              />
            </div>
            <div className="absolute lg:top-[13%] top-[50%] lg:left-[15%] left-[60%]">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.Lee_info}
                className="lg:w-[300px] w-[200px]"
              />
            </div>
            <div className="absolute top-[50%] opacity-25 right-[29%] lg:block hidden">
              <img src={imgAssets.Name_overlay} />
            </div>
            <div className="absolute top-[8%] lg:top-[53%] right-[60%] lg:right-[32%]">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.ButtonPlay}
                className="hover:scale-115 transition-all cursor-pointer"
                onClick={() => {
                  setDataPlay2(true)
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>

      <AnimatePresence>
        {char === 2 ? (
          <div className={`${char === 2 ? "" : "hidden"}`}>
            <div className="absolute bottom-[60px] lg:bottom-[-100px] -right-10">
              <motion.img
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                }}
                src={imgAssets.Bancia_char}
                className="lg:w-[70%] w-[400px] lg:h-auto h-[800px] object-cover"
              />
            </div>
            <div className="absolute top-[50%] lg:top-[13%] left-[45%] lg:left-[15%]">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.Bancia_info}
                className="lg:w-[300px] w-[200px]"
              />
            </div>
            <div className="absolute top-[50%] opacity-25 right-[29%] lg:block hidden">
              <img src={imgAssets.Name_overlay} />
            </div>
            <div className="absolute top-[8%] lg:top-[53%] right-[60%] lg:right-[32%]">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.ButtonPlay}
                className="hover:scale-110 transition-all cursor-pointer"
                onClick={() => {
                  setDataPlay3(true)
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>

      <AnimatePresence>
        {char === 3 ? (
          <div className={`${char === 3 ? "" : "hidden"}`}>
            <div className="absolute bottom-[60px] lg:bottom-[-90px] -right-10">
              <motion.img
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                }}
                src={imgAssets.Hangying_char}
                className="lg:w-[70%] w-[400px] lg:h-auto h-[800px] object-cover"
              />
            </div>
            <div className="absolute top-[50%] lg:top-[13%] left-[50%] lg:left-[15%]">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.Hangying_info}
                className="lg:w-[300px] w-[200px]"
              />
            </div>
            <div className="absolute top-[50%] opacity-25 right-[29%] lg:block hidden">
              <img src={imgAssets.Name_overlay} />
            </div>
            <div className="absolute top-[8%] lg:top-[53%] right-[60%] lg:right-[32%]">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                src={imgAssets.ButtonPlay}
                className="hover:scale-110 transition-all cursor-pointer"
                onClick={() => {
                  setDataPlay4(true)
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default Data;
