import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();
  const currentPage = location.pathname.substring(1); // Remove leading slash

  useEffect(() => {
    // Update URL when page changes
    console.log(currentPage);
    // ...
  }, [currentPage]);

  return (
    <>
      {!sizing && (
        <div className="sidebar h-full w-2/12 lg:flex flex-col gap-6 hidden  bg-slate-950 border-e-2 border-purple-700 relative">
          <div
            onClick={() => setsizing((f) => !f)}
            className="resize-ico bg-slate-950 flex flex-col justify-center text-2xl text-white absolute z-40 top-1/2 pl-0 p-3 border-y-2 border-e-2 rounded-tr-full rounded-br-full border-purple-700 transition delay-150 duration-300 ease-in-out "
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
              <li
                style={{
                  borderRight: currentPage === "" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "" ? " #370667" : "",
                }}
                className=" p-4   hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="/">
                  <MdExplore className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Explore</p>
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Albums" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Albums" ? " #370667" : "",
                }}
                className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Albums">
                  <IoIosAlbums className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Albums</p>
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Artists" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Artists" ? " #370667" : "",
                }}
                className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Artists">
                  <FaArtstation className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Artists</p>
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Genres" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Genres" ? " #370667" : "",
                }}
                className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-middle" to="./Genres">
                  <GiRegeneration className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Genres</p>
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Stations" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Stations" ? " #370667" : "",
                }}
                className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Stations">
                  <IoRadioSharp className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Stations</p>
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-xl pt-11">
              <li
                style={{
                  borderRight:
                    currentPage === "Downloads" ? "6px solid #9333EA" : "",
                  backgroundColor:
                    currentPage === "Downloads" ? " #370667" : "",
                }}
                className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="/Downloads">
                  <FaDownload className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Downloads</p>
                </NavLink>
              </li>

              <li
                style={{
                  borderRight:
                    currentPage === "Favourites" ? "6px solid #9333EA" : "",
                  backgroundColor:
                    currentPage === "Favourites" ? " #370667" : "",
                }}
                className="last-list p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink
                  className="flex  gap-5  align-center"
                  to="./Favourites"
                >
                  <MdFavorite className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Favourites</p>
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-xl pt-11">
              <li
                style={{
                  borderRight:
                    currentPage === "Playlist" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Playlist" ? " #370667" : "",
                }}
                className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Playlist">
                  <PiPlaylistFill className="  xl:mt-1 xl:ml-3 lg:hidden xl:block" />
                  <p> Playlist</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      {sizing && (
        <div className="sidebar h-full w-1/12 lg:flex flex-col gap-6 hidden bg-slate-950 border-e-2 border-purple-700 relative">
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
              <li
                style={{
                  borderRight: currentPage === "" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "" ? " #370667" : "",
                }}
                className=" p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="/">
                  <MdExplore className="  text-2xl " />
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Albums" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Albums" ? " #370667" : "",
                }}
                className=" p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Albums">
                  <IoIosAlbums className="  text-2xl " />
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Artists" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Artists" ? " #370667" : "",
                }}
                className=" p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Artists">
                  <FaArtstation className="  text-2xl " />
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Genres" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Genres" ? " #370667" : "",
                }}
                className=" p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-middle" to="./Genres">
                  <GiRegeneration className="  text-2xl " />
                </NavLink>
              </li>
              <li
                style={{
                  borderRight:
                    currentPage === "Stations" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Stations" ? " #370667" : "",
                }}
                className="last-list  p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Stations">
                  <IoRadioSharp className="  text-2xl " />
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-lg pt-11">
              <li
                style={{
                  borderRight:
                    currentPage === "Downloads" ? "6px solid #9333EA" : "",
                  backgroundColor:
                    currentPage === "Downloads" ? " #370667" : "",
                }}
                className=" p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="/Downloads">
                  <FaDownload className="  text-2x l" />
                </NavLink>
              </li>

              <li
                style={{
                  borderRight:
                    currentPage === "Favourites" ? "6px solid #9333EA" : "",
                  backgroundColor:
                    currentPage === "Favourites" ? " #370667" : "",
                }}
                className="last-list p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink
                  className="flex  gap-5  align-center"
                  to="./Favourites"
                >
                  <MdFavorite className="  text-2xl " />
                </NavLink>
              </li>
            </ul>
            <ul className="menu-list text-white flex flex-col text-lg pt-11">
              <li
                style={{
                  borderRight:
                    currentPage === "Playlist" ? "6px solid #9333EA" : "",
                  backgroundColor: currentPage === "Playlist" ? " #370667" : "",
                }}
                className="last-list  p-4 flex  justify-center  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900"
              >
                <NavLink className="flex  gap-5  align-center" to="./Playlist">
                  <PiPlaylistFill className="  text-2xl " />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
