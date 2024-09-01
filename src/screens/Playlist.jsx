import React, { useRef, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

import { CiMenuKebab } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineQueue } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { TbPlaylistAdd } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import play from "../assets/play.svg";
import songData from "../assets/PlaylistExport.json";

export const Playlist = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [opHovered, setOpHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterOption = () => setOpHovered(!opHovered);

  const startIndex = 15;
  const slicedData = songData.slice(startIndex);

  return (
    <div>
      <Header />
      <div className="playlist-content">
        <div className="add-playlist mt-10 px-8 text-white">
          <h1 className="text-2xl font-semibold mb-4">Your Playlist</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {songData.map(
              (mdata, index) =>
                index < 3 && (
                  <SwiperSlide
                    id={mdata.id}
                    className="card song-card overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={mdata.picture} className="  rounded-xl " alt="" />
                    <h4 className="text-lg mt-4">{mdata.album}</h4>
                    <p className="text-md  text-gray-200">{mdata.artist}</p>
                    {isHovered && (
                      <div className="card-overlay-2 rounded-md p-4">
                        <img
                          id="playBtn"
                          src={play}
                          className="absolute"
                          alt=""
                        />
                        <CiMenuKebab
                          onClick={handleMouseEnterOption}
                          className=" float-right font-semibold text-3xl cursor-pointer"
                        />
                        {opHovered && (
                          <ul className="absolute left-10 option-list bg-slate-300 text-gray-600 w-4/6 rounded-lg flex flex-col py-3 px-1">
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <GrFavorite />
                              Add to Favorite
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <MdOutlineQueue />
                              Add to Queue
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <CiSaveDown1 /> Download
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <TbPlaylistAdd /> Add to Playlist
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <CiShare2 />
                              Share
                            </li>
                          </ul>
                        )}
                      </div>
                    )}
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        <div className="playlist-row mt-10 px-8 text-white">
          <h1 className="text-2xl font-semibold mb-4">Featured Playlist</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {slicedData.map(
              (mdata, index) =>
                index < 10 && (
                  <SwiperSlide
                    id={mdata.id}
                    className="card song-card overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={mdata.picture} className="  rounded-xl " alt="" />
                    <h4 className="text-lg mt-4">{mdata.album}</h4>
                    <p className="text-md  text-gray-200">{mdata.artist}</p>
                    {isHovered && (
                      <div className="card-overlay-2 rounded-md p-4">
                        <img
                          id="playBtn"
                          src={play}
                          className="absolute"
                          alt=""
                        />
                        <CiMenuKebab
                          onClick={handleMouseEnterOption}
                          className=" float-right font-semibold text-3xl cursor-pointer"
                        />
                        {opHovered && (
                          <ul className="absolute left-10 option-list bg-slate-300 text-gray-600 w-4/6 rounded-lg flex flex-col py-3 px-1">
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <GrFavorite />
                              Add to Favorite
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <MdOutlineQueue />
                              Add to Queue
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <CiSaveDown1 /> Download
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <TbPlaylistAdd /> Add to Playlist
                            </li>
                            <li className="flex text-md align-center gap-3 px-3 py-2 hover:bg-slate-400">
                              <CiShare2 />
                              Share
                            </li>
                          </ul>
                        )}
                      </div>
                    )}
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};