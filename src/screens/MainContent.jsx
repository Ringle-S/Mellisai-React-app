import React from "react";
import { Route, Routes } from "react-router-dom";
import Explore from "./Explore";
import Albums from "./Albums";
import Artists from "./Artists";
import Genres from "./Genres";
import Stations from "./Stations";

import { Favourites } from "./Favourites";
import { Playlist } from "./Playlist";
import { Downloads } from "./Downloads";

export default function MainContent() {
  return (
    <div className=" w-full overflow-y-auto">
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/Albums" element={<Albums />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/Stations" element={<Stations />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}
