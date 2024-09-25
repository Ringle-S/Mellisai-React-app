import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import logosm from "../assets/logo-sm.png";
import { MdExplore } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import { FaArtstation } from "react-icons/fa";
import { GiRegeneration } from "react-icons/gi";
import { IoRadioSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

import { PiPlaylistFill } from "react-icons/pi";
import { IoChevronForward } from "react-icons/io5";
export const SideNav = () => {
  const [sizing, setsizing] = useState(false);

  // if (sizing) {
  //   // setWidth("w-1/12");
  //   setRotate("rotate-180");
  //   // setFirst(!first);
  //   // setSecond(!second);
  // }

  // sizing && setRotate("rotate-180");
  // function sizeFunc() {
  //   setsizing((f) => !f);
  // }
  return (
    <>
      {!sizing && (
        <div className="sidebar h-full w-2/12 lg:flex flex-col gap-6 hidden  bg-slate-950 border-e-2 border-purple-700 relative">
          <div
            onClick={() => setsizing((f) => !f)}
            className="resize-ico bg-slate-950 hidden 2xl:flex flex-col justify-center text-2xl text-white absolute z-40 top-1/2 pl-0 p-3 border-y-2 border-e-2 rounded-tr-full rounded-br-full border-purple-700 transition delay-150 duration-300 ease-in-out "
          >
            <IoChevronForward className=" transition delay-150 duration-300 ease-in-out  " />
          </div>
          <div>
            <div className="logo flex justify-center pt-8">
              <NavLink>
                <img className="px-4" src={logo} alt="Logo" />
                <p className=" text-sm text-white text-center">Sound of Soul</p>
              </NavLink>
            </div>
            <ul className="menu-list text-white flex flex-col text-xl pt-11">
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="/">
                  <MdExplore className=" mt-0 ml-3 lg:hidden xl:block" />
                  <p> Explore</p>
                </NavLink>
              </li>
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Albums">
                  <IoIosAlbums className=" mt-0 ml-3 lg:hidden xl:block" />
                  <p> Albums</p>
                </NavLink>
              </li>
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Artists">
                  <FaArtstation className=" mt-0 ml-3 lg:hidden xl:block" />
                  <p> Artists</p>
                </NavLink>
              </li>
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-middle" to="./Genres">
                  <GiRegeneration className=" mt-0 ml-3 lg:hidden xl:block" />
                  <p> Genres</p>
                </NavLink>
              </li>
              <li className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Stations">
                  <IoRadioSharp className=" mt-0 ml-3 lg:hidden xl:block" />
                  <p> Stations</p>
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-xl pt-11">
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="/Downloads">
                  <FaDownload className=" mt-1 ml-3 lg:hidden xl:block" />
                  <p> Downloads</p>
                </NavLink>
              </li>

              <li className="last-list p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink
                  className="flex  gap-5  align-center"
                  to="./Favourites"
                >
                  <MdFavorite className=" mt-1 ml-3 lg:hidden xl:block" />
                  <p> Favourites</p>
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-xl pt-11">
              <li className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Playlist">
                  <PiPlaylistFill className=" mt-1 ml-3 lg:hidden xl:block" />
                  <p> Playlist</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      {sizing && (
        <div className="sidebar h-full w-1/12 flex flex-col gap-6 bg-slate-950 border-e-2 border-purple-700 relative">
          <div
            onClick={() => setsizing((f) => !f)}
            className="resize-ico bg-slate-950 flex flex-col justify-center text-2xl text-white absolute z-40 top-1/2 pl-0 p-3 border-y-2 border-e-2 rounded-tr-full rounded-br-full border-purple-700 transition delay-150 duration-300 ease-in-out "
          >
            <IoChevronForward className="rotate-180 transition delay-150 duration-300 ease-in-out" />
          </div>
          <div>
            <div className="logo flex justify-center mt-8 p-4">
              <NavLink>
                <img src={logosm} className="logosm ml-4" alt="Logo" />
                <p className=" text-sm text-white text-center">Sound of Soul</p>
              </NavLink>
            </div>
            <ul className="menu-list text-white flex flex-col text-lg pt-11">
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="/">
                  <MdExplore className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Albums">
                  <IoIosAlbums className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Artists">
                  <FaArtstation className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-middle" to="./Genres">
                  <GiRegeneration className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
              <li className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Stations">
                  <IoRadioSharp className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-lg pt-11">
              <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="/Downloads">
                  <FaDownload className=" mt-1 ml-10 text-2x l" />
                </NavLink>
              </li>

              <li className="last-list p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink
                  className="flex  gap-5  align-center"
                  to="./Favourites"
                >
                  <MdFavorite className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-lg pt-11">
              <li className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
                <NavLink className="flex  gap-5  align-center" to="./Playlist">
                  <PiPlaylistFill className=" mt-1 ml-10 text-2xl " />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
