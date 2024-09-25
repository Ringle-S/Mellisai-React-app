import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { CiMenuKebab } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineQueue } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { TbPlaylistAdd } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import play from "../assets/play.svg";
import musicData from "../assets/PlaylistExport.json";

export default function Stations() {
  const [isHovered, setIsHovered] = useState(false);
  const [opHovered, setOpHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterOption = () => setOpHovered(!opHovered);

  const startIndex = 35;
  const slicedData = musicData.slice(startIndex);

  return (
    <div>
      <Header />
      <div className="station-content">
        <div className="art-row mt-10 px-2 md:px-8 text-white ">
          <h1 className="text-2xl font-semibold mb-4">Top Stations</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {slicedData.map(
              (mdata, index) =>
                index < 15 && (
                  <SwiperSlide
                    id={mdata.id}
                    className=" overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {opHovered && (
                      <ul className="absolute hidden xl:hidden z-50 left-0 lg:left-5  xl:left-0 2xl:left-5 option-list bg-slate-300 text-gray-600 xl:w-5/6 2xl:w-4/6 rounded-lg  flex-col py-3 px-1">
                        <li className="flex text-md align-center text-sm gap-3 px-3 py-2 hover:bg-slate-400">
                          <GrFavorite />
                          Add to Favorite
                        </li>
                        <li className="flex text-md align-center text-sm gap-3 px-3 py-2 hover:bg-slate-400">
                          <MdOutlineQueue />
                          Add to Queue
                        </li>
                        <li className="flex text-md align-center text-sm gap-3 px-3 py-2 hover:bg-slate-400">
                          <CiSaveDown1 /> Download
                        </li>
                        <li className="flex text-md align-center text-sm gap-3 px-3 py-2 hover:bg-slate-400">
                          <TbPlaylistAdd /> Add to Playlist
                        </li>
                        <li className="flex text-md align-center text-sm gap-3 px-3 py-2 hover:bg-slate-400">
                          <CiShare2 />
                          Share
                        </li>
                      </ul>
                    )}
                    <div className="card song-card">
                      <img
                        src={mdata.picture}
                        className="  rounded-xl "
                        alt=""
                      />
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
                        </div>
                      )}
                    </div>
                    <p className="text-lg mt-4  text-gray-200">
                      {mdata.artist}
                    </p>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
