import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import songData from "../assets/PlaylistExport.json";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineQueue } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { TbPlaylistAdd } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import play from "../assets/play.svg";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import musicData from "../assets/PlaylistExport.json";
import { PlayerContext } from "./PlayerContext";

export const Downloads = () => {
  const { playWithid } = useContext(PlayerContext);
  const [isHovered, setIsHovered] = useState(false);
  const [opHovered, setOpHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterOption = () => setOpHovered(!opHovered);

  const startIndex = 15;
  const slicedData = musicData.slice(startIndex);

  function convertSecondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Optional: Format minutes and seconds with leading zeros
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    // Return the formatted time string (or object with minutes and seconds)
    if (formattedMinutes === "00") {
      return `${formattedSeconds}s`; // Only seconds if minutes are 0
    } else {
      return `${formattedMinutes}:${formattedSeconds}`; // Minutes and seconds
    }

    // Alternative return format (object with minutes and seconds)
    // return { minutes, seconds };
  }

  return (
    <div>
      <Header />
      <div className="download-content px-2  md:px-8">
        <h1 className="text-2xl font-semibold mb-8 mt-14 text-white">
          Downloads
        </h1>
        <div className="px-2 lg:px-14">
          <table class="table-auto w-full text-left ">
            <thead className="">
              <tr className="text-purple-500 text-lg border-b-2 border-purple-500 ">
                <th className="px-4 py-2 hidden md:block">#</th>
                <th className="px-4 py-2">Song Title</th>
                <th className="px-4 py-2 hidden lg:block">Album</th>
                <th className="px-4 py-2 ">Duration</th>
                <th className="px-4 py-2 hidden lg:block">Add To Favourites</th>
                <th className="px-4 py-2 ">Delete</th>
              </tr>
            </thead>
            <tbody className="w-full text-left">
              {songData.map(
                (sData, index) =>
                  index < 15 && (
                    <tr
                      onClick={() => playWithid(sData.id)}
                      id={sData.id}
                      className="text-white hover:text-purple-500 cursor-pointer "
                    >
                      <td className="px-4 py-3 hidden md:block">{index + 1}</td>
                      <td className="px-4 py-3">{sData.title}</td>
                      <td className="px-4 py-3 hidden lg:block">
                        {sData.album}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {convertSecondsToTime(sData.duration)}
                      </td>
                      <td className="px-4 py-3 hidden lg:block">
                        {<GrFavorite className="w-6 h-6 text-center ms-10" />}
                      </td>
                      <td className="px-4 py-3 ">
                        {<IoMdClose className="w-6 h-6 text-center ms-5" />}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
        <div className="Artist-row mt-16 px-8 text-white ">
          <h1 className="text-2xl font-semibold  mb-4">Download For Free</h1>
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
};
