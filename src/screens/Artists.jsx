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
import artist1 from "../assets/artist1.jpg";
import artist2 from "../assets/artist2.jpg";
import artist3 from "../assets/artist3.jpg";
import artist4 from "../assets/artist4.jpg";
import artist5 from "../assets/artist5.jpg";
import artist6 from "../assets/artist6.jpg";
import artist7 from "../assets/artist7.jpg";
import artist8 from "../assets/artist8.jpg";
import artist9 from "../assets/artist9.jpg";
import artist10 from "../assets/artist10.jpg";
import artist11 from "../assets/artist11.jpg";
import artist12 from "../assets/artist12.jpg";
import artist13 from "../assets/artist13.jpg";

export default function Artists() {
  const [isHovered, setIsHovered] = useState(false);
  const [opHovered, setOpHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterOption = () => setOpHovered(!opHovered);

  const startIndex = 15;
  const slicedData = musicData.slice(startIndex);

  const img = [
    artist1,
    artist2,
    artist3,
    artist4,
    artist5,
    artist6,
    artist7,
    artist8,
    artist9,
    artist10,
    artist11,
    artist12,
    artist13,
  ];
  const musicArtists = [
    "The Beatles",
    "Michael Jackson",
    "Elvis Presley",
    "Madonna",
    "Rihanna",
    "Queen",
    "Bob Dylan",
    "The Rolling Stones",
    "Eminem",
    "Beyoncé",
    "Marília Mendonca",
    "A.R. Rahman",
    "BTS",
  ];

  return (
    <div>
      <Header />
      <div className=" mt-10 px-8 text-white">
        <h1 className="text-2xl font-semibold mb-4">Top Artists</h1>
        <div className="flex flex-wrap gap-4 ">
          <div className="card flex flex-col justify-center p-10 gap-4">
            <img className="rounded-full" src={artist1} alt="" />
            <p className="text-center text-xl">The Beatles</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist2} alt="" />
            <p className="text-center text-xl">Michael Jackson</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist3} alt="" />
            <p className="text-center text-xl">Elvis Presley</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist4} alt="" />
            <p className="text-center text-xl">Madonna</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist5} alt="" />
            <p className="text-center text-xl">Rihanna</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist6} alt="" />
            <p className="text-center text-xl">Queen</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist7} alt="" />
            <p className="text-center text-xl">Bob Dylan</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist8} alt="" />
            <p className="text-center text-xl">The Rolling Stones</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist9} alt="" />
            <p className="text-center text-xl">Marília Mendonca</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist10} alt="" />
            <p className="text-center text-xl">A.R. Rahman</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist11} alt="" />
            <p className="text-center text-xl">Eminem</p>
          </div>
          <div className="card flex flex-col justify-center p-4 gap-4">
            <img className="rounded-full" src={artist12} alt="" />
            <p className="text-center text-xl">Beyoncé</p>
          </div>
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
                    <img src={mdata.picture} className="  rounded-xl " alt="" />
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
                  <p className="text-lg mt-4  text-gray-200">{mdata.artist}</p>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
