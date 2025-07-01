import Link from "next/link";
import { urbanist } from "./fonts";
import { useEffect, useState } from "react";

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
      <div className="pl-2 flex justify-between items-center w-[15%] min-w-50 text-gray-300">
        <img src="/apple-logo-svgrepo-com.svg" alt="" className="h-3 w-auto" />
        <div className={`${urbanist.className} font-bold text-white`}>
          Faraj Salim
        </div>
        <Link href="" className="">
          Resume
        </Link>
      </div>
      <div className="flex w-2xs justify-between pr-2 text-gray-200 text-sm">
        {/* <svg width="18" height="13" viewBox="0 0 26 13" className="hidden text-white mt-1"> */}
        {/*   <path  d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H20C21.6569 0.5 23 1.84315 23 3.5V9.5C23 11.1569 21.6569 12.5 20 12.5H3C1.34315 12.5 0 11.1569 0 9.5V3.5ZM1 3.5C1 2.39543 1.89543 1.5 3 1.5H20C21.1046 1.5 22 2.39543 22 3.5V9.5C22 10.6046 21.1046 11.5 20 11.5H3C1.89543 11.5 1 10.6046 1 9.5V3.5ZM25.5 6.5C25.5 7.61042 24.8967 8.57994 24 9.09865V3.90135C24.8967 4.42006 25.5 5.38958 25.5 6.5Z" fill="white" fillOpacity="0.8"/> */}
        {/* </svg> */}
        <img src="/wifi.svg" alt="" />
        <Link className="flex justify-center items-center" href="/login">
          <img src="/controls.svg" alt="" />
        </Link>
        <img src="/search.svg" alt="" />
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
}
