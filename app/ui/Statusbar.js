import Link from "next/link";
import { urbanist } from "./fonts";
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
  const time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div
      className={`bg-black/20 backdrop-blur-2xl flex items-center justify-between ${className}`}
    >
      <div className="flex justify-evenly items-center w-[15%] min-w-50 text-gray-300">
        {/* <img src="/apple-logo-svgrepo-com.svg" alt="" className="h-3 w-auto" /> */}
        <div className="font-extrabold">ن</div>
        <div className={`${urbanist.className} font-bold text-white`}>
          Faraj Salim
        </div>
        <Link href="" className="">
          Resume
        </Link>
      </div>
      <div className="flex w-2xs justify-between pr-2 text-gray-200 text-sm">
        <img src="/wifi.svg" alt="" />
        <Link className="flex justify-center items-center" href="/login">
          <Settings className="h-4" />
        </Link>
        <img src="/search.svg" alt="" />
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
}
