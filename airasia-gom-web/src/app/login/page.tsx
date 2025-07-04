"use client";

import { useState } from "react";
import AirasiaBackgroundImage from "../assets/airasia-background.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { authAtom } from "../store/authStore";

export default function Login() {
  const router = useRouter();
  const setAuthData = useSetAtom(authAtom)

  const [formInput, setFormInput] = useState<{
    password: string;
    email: string;
  }>({
    password: "",
    email: "",
  });


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formInput.email || !formInput.password) {
      return;
    }
    setAuthData({
      isAuthenticated: true,
      user: {email: formInput.email}
    });

    // localStorage.setItem("isAuthenticated", "true");
    // localStorage.setItem("userEmail", formInput.email);
    window.location.replace("/");
  };

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[100%] ">
      <Image
        src={AirasiaBackgroundImage}
        alt="Background image"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="z-10 relative flex flex-col items-center justify-center mt-[2%]">
        <h1 className="font-extrabold drop-shadow-lg text-black text-lg ">
          WPUA Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 p-5 bg-white rounded-sm drop-shadow-md w-[400px] flex items-center justify-center flex-col">
            <h1 className="font-bold drop-shadow-lg text-black text-md mb-4">
              Government login
            </h1>
            <div className="flex-1 w-[300px] mt-2">
              <label className="block text-sm font-medium text-gray-500">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formInput.email}
                onChange={(e) => handleFormInput(e)}
                className="w-full h-[35px] p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1 w-[300px] mt-2">
              <label className="block text-sm font-medium text-gray-500">
                Password
              </label>
              <input
                type="pasowrd"
                name="password"
                value={formInput.password}
                onChange={(e) => handleFormInput(e)}
                className="w-full h-[35px] p-2 border border-gray-300 rounded-md"
              />
              <label className="block text-xs font-light text-red-600 text-right cursor-pointer">
                Forgot Password
              </label>

              <div className="flex-1 w-[300px] mt-4">
                <button
                  type="submit"
                  className="px-8 py-2 bg-green-500 border-2 w-[100%] border-gray-500 cursor-pointer text-white rounded-3xl hover:bg-green-600"
                >
                  Log In
                </button>
              </div>
              <span className="block text-xs font-light text-black text-center mt-2">
                Don't have an account?
              </span>
              <span className="block text-xs font-light text-red-600 text-center cursor-pointer">
                Sign Up
              </span>

              <span className="block text-xs font-light text-red-600 text-center mt-2 cursor-pointer">
                Login with SSO
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
