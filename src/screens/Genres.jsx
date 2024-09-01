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
import carnatic from "../assets/Carnatic.jpg";
import dance from "../assets/dance.jpg";
import devotional from "../assets/devotional.jpg";
import edm from "../assets/Edm.jpg";
import Folk from "../assets/Folk.jpg";
import hiphop from "../assets/hibhob.jpg";
import jazz from "../assets/jazz.jpg";
import melody from "../assets/melody.jpg";
import metal from "../assets/metal.jpg";
import moody from "../assets/moody.jpg";
import Pop from "../assets/Pop.jpg";
import Rock from "../assets/Rock.jpg";
import romantic from "../assets/romantic.jpg";

export default function Genres() {
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
      <div className="genres p-8 text-white">
        <h1 className="text-white text-2xl mb-6">Top Genres</h1>
        <div className="row flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-2/6">
            <div
              style={{ height: "60vh" }}
              className="relative cursor-pointer w-full overflow-hidden"
            >
              <img
                src={romantic} // Replace with your image path
                alt="Background Image"
                className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
              />
              <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                <h1 className="text-5xl text-white font-bold">Initial Text</h1>
              </div>
              <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                {" "}
                <img
                  className="absolute top-1/2  left-1/2 lg:left-56"
                  src={play}
                  alt=""
                />
                <h2 classNameName="text-lg text-white font-medium">Romantic</h2>
                <span classNameName="text-lg text-gray-300 font-medium">
                  Explore songs
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 flex flex-col gap-8">
            <div className="row flex  flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={melody} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-24"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">
                      Melody
                    </h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={jazz} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-1/2 md:left-52"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">Jazz</h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex  flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={moody} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-1/2 md:left-56"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">
                      Moody
                    </h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={devotional} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-24"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">
                      Devotional
                    </h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6">
            <div
              style={{ height: "60vh" }}
              className="relative cursor-pointer w-full overflow-hidden"
            >
              <img
                src={dance} // Replace with your image path
                alt="Background Image"
                className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
              />
              <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                <h1 className="text-5xl text-white font-bold">Initial Text</h1>
              </div>
              <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                {" "}
                <img
                  className="absolute top-1/2 left-1/2 lg:left-28"
                  src={play}
                  alt=""
                />
                <h2 classNameName="text-lg text-white font-medium">Dance</h2>
                <span classNameName="text-lg text-gray-300 font-medium">
                  Explore songs
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/6 flex flex-col gap-8">
            <div className="row flex  flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={carnatic} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-24"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">
                      Carnatic
                    </h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={edm} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-56"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">Edm</h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex  flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={Folk} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-1/2 md:left-24"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">Folk</h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={hiphop} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-24"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">
                      Hip Hop
                    </h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="relative cursor-pointer w-full h-64 overflow-hidden">
                  <img
                    src={metal} // Replace with your image path
                    alt="Background Image"
                    className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
                  />
                  <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                    <h1 className="text-5xl text-white font-bold">
                      Initial Text
                    </h1>
                  </div>
                  <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {" "}
                    <img
                      className="absolute top-1/2 left-24"
                      src={play}
                      alt=""
                    />
                    <h2 classNameName="text-lg text-white font-medium">
                      Metal
                    </h2>
                    <span classNameName="text-lg text-gray-300 font-medium">
                      Explore songs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/6">
            <div
              style={{ height: "60vh" }}
              className="relative cursor-pointer w-full overflow-hidden"
            >
              <img
                src={Pop} // Replace with your image path
                alt="Background Image"
                className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
              />
              <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                <h1 className="text-5xl text-white font-bold">Initial Text</h1>
              </div>
              <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                {" "}
                <img
                  className="absolute top-1/2 left-1/2 lg:"
                  src={play}
                  alt=""
                />
                <h2 classNameName="text-lg text-white font-medium">Pop</h2>
                <span classNameName="text-lg text-gray-300 font-medium">
                  Explore songs
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6">
            <div
              style={{ height: "60vh" }}
              className="relative cursor-pointer w-full overflow-hidden"
            >
              <img
                src={Rock} // Replace with your image path
                alt="Background Image"
                className="absolute inset-0 object-cover w-full h-full z-0 rounded-xl"
              />
              <div className="absolute inset-0  flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-75">
                <h1 className="text-5xl text-white font-bold">Initial Text</h1>
              </div>
              <div className="absolute rounded-xl px-5 pb-3 bg-gradient-to-t from-purple-900 to-indigo-000 via-blue-000 inset-0 flex justify-between items-end z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                {" "}
                <img
                  className="absolute top-1/2 left-1/2 lg:left-56"
                  src={play}
                  alt=""
                />
                <h2 classNameName="text-lg text-white font-medium">Rock</h2>
                <span classNameName="text-lg text-gray-300 font-medium">
                  Explore songs
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="art-row mt-10 px-2 md:px-8 text-white ">
          <h1 className="text-2xl font-semibold mb-4">Trending Albums</h1>
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
            {slicedData.map(
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
                    <p className="text-lg mt-4  text-gray-200">{mdata.album}</p>
                    <p className="text-lg mt-1  text-gray-200">
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
