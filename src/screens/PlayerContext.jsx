import { createContext, useEffect, useRef, useState } from "react";
import preData from "../assets/PlaylistExport.json";
export const PlayerContext = createContext();

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
const PlayerContextProvider = (props) => {
  const audioRef = useRef();

  const lengthBg = useRef();
  const lengthBar = useRef();

  const [track, setTrack] = useState(songData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const loopPlay = () => {
    const audio = audioRef.current;
    audio.loop = true; // Set loop to true
    audio.src = audioSrc; // Set the audio source
    audio.play();
  };
  const playWithid = async (id) => {
    await setTrack(songData[id - 1]);
    await audioRef.current.play();
    await setPlayStatus(true);
  };

  const prevBtn = async () => {
    console.log(parseInt(track.id));
    if (parseInt(track.id) > 1) {
      await setTrack(songData[parseInt(track.id) - 1]);
      await audioRef.current.play();
      await setPlayStatus(true);
    } else if (parseInt(track.id) >= 1) {
      await setTrack(songData[5]);
      await audioRef.current.play();
      await setPlayStatus(true);
    }
  };

  const nextBtn = async () => {
    console.log(parseInt(track.id));
    if (parseInt(track.id) < 5) {
      await setTrack(songData[parseInt(track.id) + 1]);
      await audioRef.current.play();
      await setPlayStatus(true);
    } else if (parseInt(track.id) === 5) {
      await setTrack(songData[0]);
      await audioRef.current.play();
      await setPlayStatus(true);
    }
  };

  const songLenght = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / lengthBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        lengthBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    });
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
  const contextValue = {
    audioRef,
    lengthBg,
    lengthBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithid,
    prevBtn,
    nextBtn,
    songLenght,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
