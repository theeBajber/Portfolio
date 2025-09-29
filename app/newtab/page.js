"use client";
import { FcWikipedia } from "react-icons/fc";
import Typwriter from "../ui/typwriter";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { bungee } from "../ui/fonts";

export default function Tab() {
  const handleClick = (url) => {
    window.parent.postMessage({ type: "navigate", url }, "*");
  };
  return (
    <div className="w-sm h-70 flex flex-col justify-center items-center">
      <Analytics />
      <h1 className={`${bungee.className} text-lg`}>Welcome to Shoofly!</h1>
      <div>For security reasons, some links might not work.</div>
      <div className="flex items-center w-30 justify-evenly h-12">
        <button
          className="cursor-pointer"
          onClick={() => handleClick("screenworld.co.ke")}
        >
          <LinkIcon className="h-8 rounded-lg bg-white/12 w-8 p-1.5" />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => handleClick("wikipedia.org")}
        >
          <FcWikipedia className="h-8 rounded-lg bg-white/12 w-8 p-1.5" />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => handleClick("knf-portfolio.vercel.app")}
        >
          <LinkIcon className="h-8 rounded-lg bg-white/12 w-8 p-1.5" />
        </button>
      </div>
    </div>
  );
}
