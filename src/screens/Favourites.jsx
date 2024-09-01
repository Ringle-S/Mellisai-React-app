import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import songData from "../assets/PlaylistExport.json";

import { MdFavorite } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const Favourites = () => {
  const startIndex = 15;
  const slicedData = songData.slice(startIndex);
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
      <div className="download-content px-2 md:px-8">
        <h1 className="text-2xl font-semibold mb-8 mt-14 text-white">
          Favourites
        </h1>
        <div className="px-0 lg:px-14">
          <table class="table-auto w-full text-left ">
            <thead className="">
              <tr className="text-purple-500 text-lg border-b-2 border-purple-500 ">
                <th className="px-4 py-2  hidden md:block">#</th>
                <th className="px-4 py-2">Song Title</th>
                <th className="px-4 py-2 hidden md:block">Album</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2  hidden">Add To Favourites</th>
                <th className="px-4 py-2 ">Delete</th>
              </tr>
            </thead>
            <tbody className="w-full text-left">
              {slicedData.map(
                (sData, index) =>
                  index < 15 && (
                    <tr
                      id={sData.id}
                      className="text-white hover:text-purple-500 cursor-pointer "
                    >
                      <td className="px-4 py-3 hidden md:block">{index + 1}</td>
                      <td className="px-4 py-3">{sData.title}</td>
                      <td className="px-4 py-3 hidden md:block">
                        {sData.album}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {convertSecondsToTime(sData.duration)}
                      </td>
                      <td className="px-4 py-3 hidden">
                        {<MdFavorite className="w-6 h-6 text-center ms-10" />}
                      </td>
                      <td className="px-4 py-3">
                        {<IoMdClose className="w-6 h-6 text-center ms-5" />}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};
