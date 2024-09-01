import React, { useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import signup from "../assets/signup.svg";
import Login from "./Login";

export default function Signup({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      onClose();
    }
  };

  return (
    <div className="w-full h-screen  absolute z-50">
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 w-full  bg-slate-90 border border-purple-700 backdrop-blur-sm flex justify-center align-center"
      >
        <div className="md:w-5/6 xl:w-1/2 lg:w-10/12 lg:h-auto   bg-slate-950 rounded-lg border border-purple-800 px-6 py-7 text-white flex flex-col justify-start align-center gap-4">
          <button
            onClick={onClose}
            type="button"
            className=" text-xl self-end "
          >
            <GrClose />
          </button>
          <h2 className="text-2xl font-semibold">Register / Sign Up</h2>
          <p className="text-lg text-center text-gray-300">
            Please Enter all the neccessary details to combine with us
          </p>
          <div className="flex flex-col lg:flex-row mt-6 gap-2 lg:gap-8">
            <div className="w-full lg:w-1/2 flex justify-center  items-center p-1 lg:p-4">
              <img className="w-1/2 lg:w-full" src={signup} alt="" />
            </div>
            <form
              className="w-full lg:w-1/2 p-4 flex flex-col gap-4 lg:gap-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-0 lg:gap-2">
                <label>Username:</label>
                <input
                  className=" w-full h-10 pl-4 bg-purple-100 text-black  rounded-lg placeholder:text-black"
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.username && (
                  <span className="text-red-500 font-bold">
                    {errors.username}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0 lg:gap-2">
                <label>Email:</label>
                <input
                  className=" w-full h-10 pl-4 bg-purple-100 text-black  rounded-lg placeholder:text-black"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500 font-bold">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col gap-0 lg:gap-2">
                <label>Password:</label>
                <input
                  className=" w-full h-10 pl-4 bg-purple-100 text-black  rounded-lg placeholder:text-black"
                  type="password"
                  name="password"
                  placeholder="******"
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="text-red-500 font-bold">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0 lg:gap-2">
                <label>Confirm Password:</label>
                <input
                  className=" w-full h-10 pl-4 bg-purple-100 text-black  rounded-lg placeholder:text-black"
                  type="password"
                  name="confirmPassword"
                  placeholder="******"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 font-bold">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <button
                className="self-center px-6 text-sm text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl"
                type="submit"
              >
                Submit
              </button>
            </form>
            {submitted && <Login />}
          </div>
        </div>
      </div>
    </div>
  );
}
