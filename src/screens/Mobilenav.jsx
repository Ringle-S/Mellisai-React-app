import React from "react";
import { NavLink } from "react-router-dom";
import { MdExplore } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import { FaArtstation } from "react-icons/fa";
import { GiRegeneration } from "react-icons/gi";
import { IoRadioSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

import { PiPlaylistFill } from "react-icons/pi";
import { IoChevronForward } from "react-icons/io5";
export const Mobilenav = () => {
  return (
    <div className=" bg-black border-r-2 border-violet-900 h-[90vh] w-10/12  left-0 top-4/4  transform transition-transform duration-500 ease-in-out absolute z-40">
      <ul className="menu-list text-white flex flex-col text-xl pt-11">
        <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/">
            <MdExplore className=" mt-0 ml-3" />
            <p> Explore</p>
          </NavLink>
        </li>
        <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/Albums">
            <IoIosAlbums className=" mt-0 ml-3" />
            <p> Albums</p>
          </NavLink>
        </li>
        <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/Artists">
            <FaArtstation className=" mt-0 ml-3" />
            <p> Artists</p>
          </NavLink>
        </li>
        <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-middle" to="/Genres">
            <GiRegeneration className=" mt-0 ml-3" />
            <p> Genres</p>
          </NavLink>
        </li>
        <li className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/Stations">
            <IoRadioSharp className=" mt-0 ml-3" />
            <p> Stations</p>
          </NavLink>
        </li>
      </ul>
      <ul className="menu-list text-white flex flex-col text-xl pt-11">
        <li className=" p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/Downloads">
            <FaDownload className=" mt-1 ml-3" />
            <p> Downloads</p>
          </NavLink>
        </li>

        <li className="last-list p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/Favourites">
            <MdFavorite className=" mt-1 ml-3" />
            <p> Favourites</p>
          </NavLink>
        </li>
      </ul>
      <ul className="menu-list text-white flex flex-col text-xl pt-11">
        <li className="last-list  p-4  hover:border-e-8 hover:border-e-purple-600 hover:bg-purple-900 focus:bg-purple-900   active:bg-purple-900">
          <NavLink className="flex  gap-5  align-center" to="/Playlist">
            <PiPlaylistFill className=" mt-1 ml-3" />
            <p> Playlist</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
