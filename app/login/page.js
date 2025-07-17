// app/login/page.js
"use client";

import { Analytics } from "@vercel/analytics/next";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <Analytics />
      <div className="flex flex-col rounded-3xl h-[30rem] w-[18rem] bg-white dark:bg-black dark:text-white sm:mt-0 sm:flex-row sm:w-[42rem] sm:items-center sm:justify-between">
        {/* Left section */}
        <div className="bg-green-500 h-[11rem] w-[18rem] rounded-3xl flex justify-center items-center flex-col text-white sm:h-full sm:w-[22rem] sm:rounded-r-[95px]">
          <h4 className="font-extrabold text-3xl">
            <span className="text-black">Hello</span> Friend!
          </h4>
          <p className="text-center px-8 mt-1 text-sm text-gray-100 sm:px-1 sm:text-base">
            Enter your personal details to access all features from this site
          </p>
        </div>

        {/* Right section */}
        <div className="mt-2 flex flex-col items-center justify-center sm:mr-8">
          <h4 className="text-2xl my-2 font-bold uppercase">Sign In</h4>
          <form className="flex flex-col justify-center items-center">
            {/* Name */}
            <div className="w-60 relative my-2">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="w-60 h-9 p-2 border border-gray-300 rounded-lg peer"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-1.5 text-sm bg-white dark:bg-black peer-focus:-top-2 peer-focus:text-xs peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-gray-600 peer-focus:text-black dark:peer-focus:text-white w-16 text-center transition-all duration-150 ease-in-out"
              >
                Username
              </label>
            </div>
            {/* Password + Arrow */}
            <div className="w-60 flex justify-between items-center">
              <div className="w-48 relative my-2 md:w-60">
                <input
                  type="password"
                  id="pass"
                  placeholder=" "
                  className="w-full h-9 p-2 border border-gray-300 rounded-lg peer"
                />
                <label
                  htmlFor="pass"
                  className="absolute left-3 top-1.5 text-sm bg-white dark:bg-black peer-focus:-top-2 peer-focus:text-xs peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-gray-600 peer-focus:text-black dark:peer-focus:text-white w-16 text-center transition-all duration-150 ease-in-out"
                >
                  Password
                </label>
              </div>
              <ArrowRight className="h-7 w-7 rounded md:hidden bg-green-500" />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="rounded-lg hidden w-28 bg-green-500 h-8 items-center justify-center m-5 hover:bg-green-600 cursor-pointer md:flex"
            >
              <ArrowRight className="w-[50%]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
