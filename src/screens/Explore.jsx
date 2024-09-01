import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Header from "./Header";
import Footer from "./Footer";
import bgexplore from "../assets/exploretop.png";
import bgexplore1 from "../assets/banner2.png";
import bgexplore2 from "../assets/banner3.png";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineQueue } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { TbPlaylistAdd } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import play from "../assets/play.svg";
import musicData from "../assets/PlaylistExport.json";
import { PlayerContext } from "./PlayerContext";

export default function Explore() {
  const [banner, setBanner] = useState(0);
  const [suggest, setSuggest] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [opHovered, setOpHovered] = useState(false);
  const [opgridHovered, setOpGridHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterOption = () => setOpHovered(!opHovered);
  const handleMouseEnterOptionGrid = () => setOpGridHovered(!opgridHovered);

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

  const songData = [
    {
      title: "Death Bed",
      artist: "Powfu",
      artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
      id: "1",
    },
    {
      title: "Bad Liar",
      artist: "Imagine Dragons",
      artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      id: "2",
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
      url: "https://samplesongs.netlify.app/Faded.mp3",
      id: "3",
    },
    {
      title: "Hate Me",
      artist: "Ellie Goulding",
      artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
      id: "4",
    },
    {
      title: "Solo",
      artist: "Clean Bandit",
      artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",
      url: "https://samplesongs.netlify.app/Solo.mp3",
      id: "5",
    },
    {
      title: "Without Me",
      artist: "Halsey",
      artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      url: "https://samplesongs.netlify.app/Without%20Me.mp3",
      id: "6",
    },
  ];
  const bannerData = [
    {
      title: "Trending this weekend",
      desc: "Listen to our latest trending songs and....",
      img: bgexplore,
    },
    {
      title: "Top Series This Summer",
      desc: "Hear our Evergrenn trending series for....",
      img: bgexplore1,
    },
    {
      title: "Watch Top Playlist",
      desc: "Our Premium Top Playlist to heart....",
      img: bgexplore2,
    },
  ];
  const { playWithid } = useContext(PlayerContext);
  return (
    <div>
      <Header />
      <div className="explore-content px-5 mt-0 h-fit">
        <div className="banner-top w-full h-fit relative">
          <img
            src={bannerData[banner].img}
            className="banner object-cover w-full "
            alt=""
          />
          <div className="card-content absolute left-0 top-48 lg:left-32 lg:top-96 text-white w-3/4 flex flex-col lg:flex-row lg:justify-between ">
            <div className="left-cont flex flex-col gap-4">
              <h1 className="text-3xl lg:text-6xl w-68 lg:w-96 font-semibold transition duration-300 ease-in-out">
                {bannerData[banner].title}
              </h1>
              <span>{bannerData[banner].desc}</span>
              <button
                type="button"
                className=" w-32 text-sm text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl"
              >
                Play
              </button>
            </div>
            <div className="right-cont self-center mt-14 lg:self-end">
              <div className="flex gap-6">
                <button
                  onClick={() => {
                    setBanner((prev) => (prev === 0 ? 0 : prev - 1));
                  }}
                  type="button"
                  className="bg-black rounded-full border-e-4 hover:border-e-0 border-violet-600 p-2"
                >
                  <FaChevronLeft className="text-2xl" />
                </button>
                <button
                  onClick={() => {
                    setBanner((next) => (next === 2 ? 2 : next + 1));
                  }}
                  type="button"
                  className="bg-black rounded-full border-e-4 hover:border-e-0 border-violet-600 p-2"
                >
                  <FaChevronRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* songs  */}
        <div className="songs-row mt-10 px-2 md:px-8 text-white ">
          <h1 className="text-2xl font-semibold mb-4">Recently Played</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {songData.map((data) => (
              <SwiperSlide
                onClick={() => playWithid(data.id)}
                id={data.id}
                className="card song-card overflow-hidden cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={data.artwork} className="  rounded-xl " alt="" />
                <h4 className="text-lg mt-4">{data.title}</h4>
                <p className="text-md  text-gray-200">{data.artist}</p>
                {isHovered && (
                  <div className="card-overlay rounded-md p-4">
                    <img id="playBtn" src={play} className="absolute" alt="" />

                    <CiMenuKebab
                      onClick={handleMouseEnterOption}
                      className=" float-right font-semibold text-3xl cursor-pointer"
                    />
                    {opHovered && (
                      <ul className="absolute left-6 option-list bg-slate-300 text-gray-600 w-3/4 rounded-lg flex flex-col py-3 px-1">
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
            ))}
          </Swiper>
        </div>
        {/* {Top 15} */}
        <div className="top-weekly mt-14 px-2 md:px-8 text-white">
          <h1 className="text-2xl font-semibold mb-4">Weekly Top 15</h1>
          <div className="music-grid flex flex-col lg:flex-row flex-wrap">
            {musicData.map(
              (mdata, index) =>
                index < 15 && (
                  <div className="card flex flex-col w-3/3 lg:w-1/3  align-top relative text-white hover:text-purple-500 justify-between px-4 py-2 cursor-pointer">
                    <div className="flex">
                      <h2 className="text-5xl font-bold w-2/12">{index + 1}</h2>
                      <div className="w-2/12 flex justify-center align-center">
                        <img className="w-14 h-14" src={mdata.picture} alt="" />
                      </div>
                      <div className="row overflow-hidden w-6/12">
                        <marquee>{mdata.title}</marquee>
                        <p className="text-gray-400">{mdata.artist}</p>
                      </div>
                      <div className="row w-1/12 flex justify-center mr-2">
                        <p>{convertSecondsToTime(mdata.duration)}</p>
                      </div>
                      <div className="row w-1/12 flex justify-center ">
                        <CiMenuKebab
                          onClick={handleMouseEnterOptionGrid}
                          className=" rotate-90 text-2xl cursor-pointer"
                        />
                      </div>
                    </div>
                    <div
                      style={{ borderRadius: "50%" }}
                      className="line w-full  h-1 mt-3 bg-violet-800 opacity-65"
                    ></div>
                  </div>
                )
            )}
          </div>
        </div>
        {/* {featured Artist} */}
        <div className="art-row mt-10 px-2 md:px-8 text-white ">
          <h1 className="text-2xl font-semibold mb-4">Featured Artists</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {musicData.map(
              (mdata, index) =>
                index < 15 && (
                  <SwiperSlide
                    id={mdata.id}
                    className=" overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
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
