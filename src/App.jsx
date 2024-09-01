import React, { useContext } from "react";
import "primeicons/primeicons.css";
import { useEffect, useState } from "react";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SideNav } from "./screens/SideNav";
import MainContent from "./screens/MainContent";
import { StrictMode } from "react";
import { Player } from "./screens/Player";
import { PlayerContext } from "./screens/PlayerContext";

export const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <PrimeReactProvider>
      <div className="max-w-full h-screen relative overflow-hidden flex">
        <SideNav></SideNav>
        <StrictMode disableLegacyRendering={true}>
          <MainContent></MainContent>
        </StrictMode>
        <Player />
        <audio ref={audioRef} src={track.url} preload="auto"></audio>
      </div>
    </PrimeReactProvider>
  );
};
