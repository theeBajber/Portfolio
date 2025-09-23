import Link from "next/link";
import { amiri, urbanist } from "./fonts";
import { useEffect, useState } from "react";
import { Settings } from "lucide-react";

export default function StatusBar({ className }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const date = now.toLocaleString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const shortDate = now.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const shortTime = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div
      className={`bg-black/20 backdrop-blur-2xl flex items-center justify-between ${className}`}
    >
      <div className="flex justify-evenly items-center w-[15%] min-w-50 text-gray-300">
        <div className={`${amiri.className} font-bold text-xl pt-0.5`}>ن</div>
        <div className={`${urbanist.className} font-bold text-white`}>
          Faraj Salim
        </div>
        <Link href="/resume.doc" className="">
          Resume
        </Link>
      </div>
      <div className="flex sm:w-2xs justify-between gap-2 sm:gap-0 pr-2 text-gray-200 text-sm">
        <img className="hidden sm:block" src="/wifi.svg" alt="" />
        <Link
          className="justify-center items-center hidden sm:flex"
          href="/login"
        >
          <Settings className="h-4" />
        </Link>
        <img className="hidden sm:block" src="/search.svg" alt="" />
        <div className="min-w-[106px] hidden sm:block">{date}</div>
        <div className="sm:hidden">{shortDate}</div>
        <div className="hidden sm:block">{time}</div>
        <div className="sm:hidden">{shortTime}</div>
      </div>
    </div>
  );
}
