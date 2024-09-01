import React, { useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import signin from "../assets/signin.svg";
export default function Login({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    setErrors(validationErrors);
  };

  return (
    <div className="w-full h-screen  absolute z-50">
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 w-full  bg-slate-90 border border-purple-700 backdrop-blur-sm flex justify-center align-center"
      >
        <div className="w-10/12 xl:w-1/2  h-auto bg-slate-950 rounded-lg border border-purple-800 px-6 py-7 text-white flex flex-col justify-start align-center gap-4">
          <button
            onClick={onClose}
            type="button"
            className=" text-xl self-end "
          >
            <GrClose />
          </button>
          <h2 className="text-2xl font-semibold">Login </h2>
          <p className="text-lg text-gray-300 text-center">
            Please Enter Valid username and password
          </p>
          <div className="flex flex-col lg:flex-row  mt-6 gap-8">
            <div className=" w-full lg:w-1/2 flex justify-center items-center p-4">
              <img className="w-1/2 lg:w-full" src={signin} alt="" />
            </div>
            <form
              className="w-full lg:w-1/2  p-4 flex flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
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
              <div className="flex flex-col gap-2">
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

              <button
                className="self-center px-6 text-sm text-white py-3 bg-gradient-to-b from-purple-600 to-violet-800 hover:bg-gradient-to-tr rounded-xl"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
