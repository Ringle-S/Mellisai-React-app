import React, { useContext } from "react";
import songData from "../assets/PlaylistExport.json";
import { IoShuffle } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { RxLoop } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineQueueMusic } from "react-icons/md";
import { MdSpeaker } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOutlineZoomInMap } from "react-icons/md";
import { IoPauseSharp } from "react-icons/io5";
import { PlayerContext } from "./PlayerContext";

export const Player = () => {
  const {
    track,
    lengthBar,
    lengthBg,
    playStatus,
    play,
    pause,
    time,
    prevBtn,
    nextBtn,
    songLenght,
    loopPlay,
  } = useContext(PlayerContext);

  return (
    <div className="absolute bottom-0 z-10 w-full  h-[10%] bg-black border-t-2 border-violet-700">
      <div className="flex justify-between items-center text-white md:px-8 pt-6">
        <div className="hidden lg:flex items-center gap-4">
          <img src={track.artwork} className="w-12" alt="" />
          <div>
            <p>{track.title}</p>
            <p>{track.artist.slice(0, 12)}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            <IoShuffle className="w-4 cursor-pointer" />
            <MdSkipPrevious
              onClick={() => prevBtn()}
              className="w-4 cursor-pointer"
            />
            {playStatus ? (
              <IoPauseSharp onClick={pause} className="w-4 cursor-pointer" />
            ) : (
              <FaPlay onClick={play} className="w-4 cursor-pointer" />
            )}
            <MdSkipNext
              onClick={() => nextBtn()}
              className="w-4 cursor-pointer"
            />
            <RxLoop onClick={loopPlay} className="w-4 cursor-pointer" />
          </div>

          <div className="flex items-center gap-5">
            <p>
              {time.currentTime.minute}:{time.currentTime.second}
            </p>
            <div
              ref={lengthBg}
              onClick={songLenght}
              className="bg-gray-300 w-[60vw] max-w-[500px] rounded-full cursor-pointer"
            >
              <hr
                ref={lengthBar}
                className="h-1 border-none w-10 bg-red-700 rounded-full"
              />
            </div>
            <p>
              {time.totalTime.minute}:{time.totalTime.second}
            </p>
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-2 opacity-75">
          <AiOutlinePlaySquare className="w-4" />
          <FaMicrophone className="w-4" />
          <MdOutlineQueueMusic className="w-4" />
          <MdSpeaker className="w-4" />
          <MdVolumeUp className="w-4" />
          <div className="w-28 bg-slate-50 h-1 rounded"></div>
          <CgMiniPlayer className="w-4" />
          <MdOutlineZoomInMap className="w-4" />
        </div>
      </div>
    </div>
  );
};
