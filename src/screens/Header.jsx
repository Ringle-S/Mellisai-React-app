import React, { useState, useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import songData from "../assets/PlaylistExport.json";
import { LanguageModal } from "./LanguageModal";
import Signup from "./Signup";
import Login from "./Login";
import { FaUserCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logosm from "../assets/logo-sm.png";
import { Mobilenav } from "./Mobilenav";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setshowSignin] = useState(false);
  const [shownav, setshowNav] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [storeApi, setStoreApi] = useState({});
  // const [view, setView] = useState(false);
  // useEffect(() => {
  //   try {
  //     fetch(`https://saavn.dev/api/search?query= ${value}`)
  //       .then((response) => response.json())
  //       .then((json) => setStoreApi(json));
  //     storeApi ? setView(true) : setView(false);
  //   } catch (e) {
  //     console.log(e);
  //     console.log("have some error");
  //   }
  // }, [value]);
  // let data = storeApi.data;

  const handleChange = (event) => {
    setSearchText(event.target.value.toLowerCase()); // Convert search text to lowercase for case-insensitive search
  };

  const filterData = () => {
    const filteredNames = songData.filter((name) =>
      name.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredNames);
    console.log(searchResults);
  };

  useEffect(() => {
    filterData();
  }, [searchText]); // Run filterData whenever searchText changes

  return (
    <div className="sticky z-40 top-0">
      <nav className="bg-black px-4 lg:px-2 xl:px-6 2xl:px-14 py-4 h-20 flex justify-between align-center ">
        {shownav ? (
          <IoClose
            onClick={() => {
              setshowNav((f) => !f);
            }}
            className="text-white lg:hidden text-2xl"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => {
              setshowNav((f) => !f);
            }}
            className="text-white lg:hidden text-2xl"
          />
        )}

        <div className="search-field relative  inline">
          <RiSearch2Line className="absolute z-10 text-xl right-2 top-2 text-black" />
          <input
            name="myInput"
            value={searchText}
            onChange={handleChange}
            className="relative w-40 md:w-60 lg:w-80 h-10 pl-4 bg-purple-100 text-black  rounded-lg placeholder:text-black"
            placeholder="Search"
          />
        </div>
        <h3 className="text-white hidden 2xl:block 2xl:text-lg lg:text-sm">
          <b className="text-purple-400 ">Trending Songs: </b>Dream your
          moments, Until I Met You, Dark Alley (+8 More)
        </h3>
        <h4
          onClick={() => setShowModal(true)}
          className="text-white opacity-85 hidden lg:flex  align-center gap-4 text-sm hover:text-purple-400 cursor-pointer"
        >
          <span className="">Language</span>
          <IoLanguage />
        </h4>
        {showModal && <LanguageModal onClose={() => setShowModal(false)} />}
        <div className="logcontainer flex items-center justify-end gap-2 md:gap-6">
          <button
            onClick={() => setShowSignup(true)}
            type="button"
            className=" px-3 md:px-6 text-sm text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl"
          >
            <span className="hidden lg:block">Register</span>
            <FaUserPlus className="lg:hidden" />
          </button>
          {showSignup && <Signup onClose={() => setShowSignup(false)} />}
          <button
            onClick={() => setshowSignin(true)}
            type="button"
            className=" px-3 md:px-6 text-sm text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl"
          >
            <span className="hidden lg:block">Login</span>
            <FaUserCheck className="lg:hidden" />
          </button>
          {showSignin && <Login onClose={() => setshowSignin(false)} />}
        </div>
      </nav>
      {shownav ? <Mobilenav /> : ""}
      {searchText && (
        <div className="search-result  bg-black lg:w-1/3 xl:w-1/4 h-auto overflow-y-auto left-1/4 md:left-1/3 lg:left-10 z-50 absolute border-2 rounded-xl border-purple-700 text-gray-300 px-8 py-5">
          <ul>
            {searchResults.map((item) => (
              <li
                className="py-1 flex items-center justify-start gap-4 cursor-pointer"
                key={item.id}
              >
                <img className="w-14 h-14" src={item.picture} alt="" />
                <div className="flex flex-col">
                  <span className="text-lg"> {item.title}</span>
                  <span className="text-sm text-gray-400"> {item.artist}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
