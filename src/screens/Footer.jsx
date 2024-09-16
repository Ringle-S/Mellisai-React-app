import React, { useState } from "react";
import logo from "../assets/Logo.png";
import web from "../assets/windows.jpg";
import gplay from "../assets/google_play.jpg";
import appstore from "../assets/app_store.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import logosm from "../assets/logo-sm.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = () => {
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
  };

  return (
    <>
      <div className="footer w-full h-max mt-28 flex  flex-col px-10 md:px-36 lg:px-10 xl:px-14 py-20 text-white text-center lg:text-start">
        <div className="flex flex-col lg:flex-row md:gap-8 lg:gap-8">
          <div className="footer-logo w-full xl:1/4 flex flex-col items-center lg:items-start gap-4">
            <h3 className="text-purple-500 text-lg">Mellissai Music Station</h3>
            <img className="w-1/2" src={logo} alt="" />
            <p>
              Mellisai is a Tamil audio streaming and media service provider
              founded on 23 April 2006 by Daniel Ek and Martin Lorentzon.
            </p>
          </div>
          <div className="w-full xl:1/4 flex flex-col gap-4">
            <h3 className="text-purple-500 text-lg">Download Our App</h3>
            <p>
              Go Mobile with our app. Listen to your favourite songs at just one
              click. Download Now !
            </p>
            <div className="w-full flex">
              <div className="w-1/2 flex justify-center lg:justify-start">
                <img className="rounded-md" src={gplay} alt="" />
              </div>
              <div className="w-1/2 flex justify-center lg:justify-start">
                <img className="rounded-md" src={web} alt="" />
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 flex justify-center lg:justify-start">
                <img className="rounded-md" src={appstore} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full xl:1/4 flex flex-col items-center lg:items-start gap-4">
            <h3 className="text-purple-500 text-lg">Subscribe</h3>
            <p>
              Subscribe to our newsletter and get latest updates and offers.
            </p>
            <input
              className="relative w-50 lg:w-70 h-10 pl-4 bg-purple-100 text-black  rounded-lg placeholder:text-black"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="mail"
              id=""
            />
            {!isValid && (
              <div
                class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Error</span>
                <div>Please enter a valid email address.</div>
              </div>
            )}
            <input
              className=" px-6 text-sm self-center lg:self-start text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl"
              type="button"
              value="Subscribe"
              onClick={validateEmail}
            />
          </div>
          <div className="w-full xl:1/4 flex flex-col gap-4">
            <h3 className="text-purple-500 text-lg">Contact Us</h3>
            <div className="w-full flex">
              <div className="w-1/5">
                <div className="bg-violet-700 flex justify-center align-center w-12 h-12 rounded-md">
                  <BiSolidPhoneCall className=" text-xl" />
                </div>
              </div>
              <div className="w-4/5">
                <p className=" font-semibold">Call Us :</p>
                <p>
                  <a href="tel:+1234567890">(+1) 99952 45445</a>
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/5">
                <div className="bg-violet-700 flex justify-center align-center w-12 h-12 rounded-md">
                  <MdContactMail className=" text-xl" />
                </div>
              </div>
              <div className="w-4/5">
                <p className=" font-semibold">Email Us :</p>

                <p>
                  <a href="mailto: mellisai@example.com">mellisai@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/5">
                <div className="bg-violet-700 flex justify-center align-center w-12 h-12 rounded-md">
                  <FaLocationDot className=" text-xl" />
                </div>
              </div>
              <div className="w-4/5">
                <p className=" font-semibold">Walk In :</p>
                <p>598 Old House Drive, India</p>
              </div>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
        <div className="flex">
          <p className="text-white w-full w-4/4 text-center mt-2 mb-10">
            mellisai@copyright 2024-2030
          </p>
        </div>
      </div>
    </>
  );
}
