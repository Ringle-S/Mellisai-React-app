import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

import Header from "./Header";
import Footer from "./Footer";
import Slider from "react-slick";
import { CiMenuKebab } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineQueue } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { TbPlaylistAdd } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import play from "../assets/play.svg";
import musicData from "../assets/PlaylistExport.json";
import album1 from "../assets/album1.jpg";
import album2 from "../assets/album2.jpg";
import album3 from "../assets/album3.jpg";
import album4 from "../assets/album4.jpg";

export default function Albums() {
  const albumData = [
    {
      id: 1,
      title: "The King of Limbs",
      img: { album1 },
      songs: [
        { title: "Bloom", length: "5:15" },
        { title: "Morning Mr Magpie", length: "4:41" },
        { title: "Little by Little", length: "4:27" },
        { title: "Feral", length: "3:13" },
        { title: "Lotus Flower", length: "5:01" },
        { title: "Codex", length: "4:47" },
        { title: "Give Up the Ghost", length: "4:50" },
        { title: "Separator", length: "5:20" },
      ],
      description:
        '\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12" vinyl releases on 28 March, a wider digital release via AWAL, and a special "newspaper" edition on 9 May 2011. The physical editions were released through the band\'s Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      ',
    },
    {
      id: 2,
      title: "OK Computer",
      img: { album2 },
      songs: [
        { title: "Airbag", length: "4:44" },
        { title: "Paranoid Android", length: "6:23" },
        { title: "Subterranean Homesick Alien", length: "4:27" },
        { title: "Exit Music (For a Film)", length: "4:24" },
        { title: "Let Down", length: "4:59" },
        { title: "Karma Police", length: "4:21" },
        { title: "Fitter Happier", length: "1:57" },
        { title: "Electioneering", length: "3:50" },
        { title: "Climbing Up the Walls", length: "4:45" },
        { title: "No Surprises", length: "3:48" },
        { title: "Lucky", length: "4:19" },
        { title: "The Tourist", length: "5:24" },
      ],
      description:
        "\n\tOK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work.\n      ",
    },
    {
      id: 3,
      title: "Dummy",
      img: { album3 },
      songs: [
        { title: "Mysterons", length: "5:02" },
        { title: "Sour Times", length: "4:11" },
        { title: "Strangers", length: "3:55" },
        { title: "It Could Be Sweet", length: "4:16" },
        { title: "Wandering Star", length: "4:51" },
        { title: "It's a Fire", length: "3:49" },
        { title: "Numb", length: "3:54" },
        { title: "Roads", length: "5:02" },
        { title: "Pedestal", length: "3:39" },
        { title: "Biscuit", length: "5:01" },
        { title: "Glory Box", length: "5:06" },
      ],
      description:
        "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      ",
    },
    {
      id: 4,
      title: "Third",
      img: { album4 },
      songs: [
        { title: "Silence", length: "4:58" },
        { title: "Hunter", length: "3:57" },
        { title: "Nylon Smile", length: "3:16" },
        { title: "The Rip", length: "4:29" },
        { title: "Plastic", length: "3:27" },
        { title: "We Carry On", length: "6:27" },
        { title: "Deep Water", length: "1:31" },
        { title: "Machine Gun", length: "4:43" },
        { title: "Small", length: "6:45" },
        { title: "Magic Doors", length: "3:32" },
        { title: "Threads", length: "5:45" },
      ],
      description:
        "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      ",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [opHovered, setOpHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterOption = () => setOpHovered(!opHovered);

  const startIndex = 15;
  const slicedData = musicData.slice(startIndex);

  return (
    <div>
      <Header />
      {/* album container */}
      <div className="album-content px-2 md:px-8 mt-4">
        {/* {featured Album} */}
        {/* {featured Artist} */}
        <div className="art-row mt-10 px-2 md:px-8 text-white ">
          <h1 className="text-2xl font-semibold mb-4">Trending Albums</h1>
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
        {/* {featured Artist} */}
        <div className="art-row mt-10 px-2 md:px-8 text-white ">
          <h1 className="text-2xl font-semibold mb-4">Forever Best</h1>
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
                index > 30 && (
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
