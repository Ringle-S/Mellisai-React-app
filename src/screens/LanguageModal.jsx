import React, { useRef, useState } from "react";
import { GrClose } from "react-icons/gr";

export const LanguageModal = ({ onClose }) => {
  // const [language, setLanguage] = useState([]);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // const onlanguageChange = (e) => {
  //   let _languages = [...language];

  //   if (e.checked) _ingredients.push(e.value);
  //   else _languages.splice(_languages.indexOf(e.value), 1);

  //   setLanguage(_languages);
  // };

  return (
    <div className="w-full h-screen  absolute z-50">
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 w-full  bg-slate-90 border border-purple-700 backdrop-blur-sm flex justify-center align-center"
      >
        <div className=" w-11/12 md:w-10/12 lg:w-1/2 xl:w-1/3 h-auto  bg-slate-950 rounded-lg border border-purple-800 px-6 py-7 text-white flex flex-col justify-start align-center gap-4">
          <button
            onClick={onClose}
            type="button"
            className=" text-xl self-end "
          >
            <GrClose />
          </button>
          <h2 className="text-2xl font-semibold">Language Selection</h2>
          <p className="text-sm md:text-lg text-gray-300 text-center">
            Please select the language(s) of the music you listen to.
          </p>
          <div className="w-full flex justify-evenly mt-6">
            <div className="card flex flex-col flex-wrap justify-content-center gap-3 text-lg ">
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language1"
                  name="pizza"
                  value="English"
                />
                <label htmlFor="language1" className="ml-2">
                  English
                </label>
              </div>
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language2"
                  name="pizza"
                  value="Tamil"
                />
                <label htmlFor="language2" className="ml-2">
                  Tamil
                </label>
              </div>
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language3"
                  name="pizza"
                  value="Malayalam"
                />
                <label htmlFor="language3" className="ml-2">
                  Malayalam
                </label>
              </div>
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language4"
                  name="pizza"
                  value="Hindi"
                />
                <label htmlFor="language4" className="ml-2">
                  Hindi
                </label>
              </div>
            </div>
            <div className="card flex flex-col flex-wrap justify-content-center gap-3 text-lg ">
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language5"
                  name="pizza"
                  value="Chinese"
                />
                <label htmlFor="language5" className="ml-2">
                  Chinese
                </label>
              </div>
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language6"
                  name="pizza"
                  value="Japanese"
                />
                <label htmlFor="language6" className="ml-2">
                  Japanese
                </label>
              </div>
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language7"
                  name="pizza"
                  value="Spanish"
                />
                <label htmlFor="language7" className="ml-2">
                  Spanish
                </label>
              </div>
              <div className="flex align-items-center">
                <input
                  type="checkbox"
                  inputId="language8"
                  name="pizza"
                  value="German"
                />
                <label htmlFor="language8" className="ml-2">
                  German
                </label>
              </div>
            </div>
          </div>
          <button className="px-6 text-sm text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
