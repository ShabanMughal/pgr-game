import React, { useState } from "react";
import { Link } from "react-scroll";
import "../Hero/Hero.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const [menuAvtive, setMenuAvtive] = useState(1);

  return (
    <div className="fixed z-50 top-[20%] left-[3%]">
      <svg
        viewBox="0 0 44 25"
        data-v-2003cf0e=""
        onClick={() => setToggle(!toggle)}
        className={`absolute z-10 w-7 top-[18%] cursor-pointer transition duration-500 left-[3%] ${
          toggle ? "" : "rotate-90"
        }`}
      >
        <rect
          x="1"
          y="0"
          width="40"
          height="3"
          fill="#ffffff"
          data-v-2003cf0e=""
        ></rect>
        <rect
          x="1"
          y="11"
          width="40"
          height="3"
          fill="#ffffff"
          data-v-2003cf0e=""
        ></rect>
        <rect
          x="1"
          y="22"
          width="40"
          height="3"
          fill="#ffffff"
          data-v-2003cf0e=""
        ></rect>
      </svg>
      <div
        className={`absolute z-10 top-[27%] mt-10 -left-4 transition duration-500
         uppercase  ${
           toggle ? "" : "-translate-x-[11rem]"
         } border-white boder-l border-l-2 px-2 text-xl`}
      >
        <ul>
          <li className="my-5 ">
            <Link
              to="hero"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all duration-500 `}
              onClick={() => setMenuAvtive(1)}
            >
              Home
            </Link>
          </li>
          <li className="my-5 ">
            <Link
              to="news"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all duration-500 `}
              onClick={() => setMenuAvtive(2)}
            >
              News
            </Link>
          </li>
          <li className="my-5 ">
            <Link
              to="data"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all duration-500 `}
              onClick={() => setMenuAvtive(3)}
            >
              Data
            </Link>
          </li>
          <li className="my-5 ">
            <Link
              to="media"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all duration-500 `}
              onClick={() => setMenuAvtive(4)}
            >
              media
            </Link>
          </li>
          <li className="my-5 ">
            <Link
              to="wallpaper"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all duration-500`}
              onClick={() => setMenuAvtive(5)}
            >
              wallpaper
            </Link>
          </li>
          <li className="my-5 ">
            <Link
              to="other"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all duration-500 `}
              onClick={() => setMenuAvtive(6)}
            >
              others
            </Link>
          </li>
          <li className="my-5 ">
            <Link
              to="feature"
              smooth="smooth"
              className={`cursor-pointer text-white transition-all`}
              onClick={() => setMenuAvtive(7)}
            >
              features
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
