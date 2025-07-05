import { useState } from "react";
import Header from "./header";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Shoofly({ className, onClose }) {
  const [url, setUrl] = useState("");
  const [frameSource, setFrameSource] = useState("../newtab/");
  const handleKey = (e) => {
    if (e.key == "Enter") {
      let input = url.trim();
      if (!input) return;
      if (!input.startsWith("http")) {
        input = "https://" + input;
      }
      setFrameSource(input);
    }
  };
  return (
    <div
      className={`${className} w-120 h-84 bg-white/30 backdrop-blur-lg rounded-lg`}
    >
      <div className="drag-handle w-full h-7 flex items-center justify-evenly">
        <div className="flex items-center w-9/10 justify-evenly ml-2">
          <button
            className="cursor-pointer"
            onClick={() => setFrameSource("../newtab/")}
          >
            <HomeIcon className="h-4 text-white" />
          </button>
          <input
            className="ml-3 h-4 bg-white/20 focus:bg-white/50 outline-none rounded text-xs px-2 select-text text-white focus:text-gray-800 transition-all duration-450"
            placeholder="https://www.url.com"
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        <Header className="" onClose={onClose} />
      </div>
      <iframe
        src={frameSource}
        className="w-full h-[calc(100%-28px)] rounded-b-lg"
      />
    </div>
  );
}
