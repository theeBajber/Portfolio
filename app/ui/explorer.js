import { FaDesktop } from "react-icons/fa";
import Header from "./header";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Download } from "lucide-react";
import { VideoIcon } from "lucide-react";
import { GalleryHorizontal } from "lucide-react";
import { useState } from "react";

const folderContents = {
  Desktop: [
    { name: "Projects", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Bin", icon: "/icons/Bin.png" },
    { name: "Skills.doc", icon: "/icons/Terminal.png" },
  ],
  "Desktop/Projects": [
    { name: "Ayra", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Screenworld", icon: "icons/Folder1.png", type: "folder" },
    { name: "Calculator", icon: "icons/Folder1.png", type: "folder" },
    { name: "ToDo", icon: "icons/Folder1.png", type: "folder" },
  ],
  Downloads: [],
  Documents: [
    { name: "Resume.doc", icon: "/icons/Terminal.png" },
    { name: "About.txt", icon: "/icons/Terminal.png" },
  ],
  Pictures: [{ name: "Me.jpg", icon: "/icons/Terminal.png" }],
  Videos: [],
};

export default function Explorer({ className, onClose }) {
  const [activeFolder, setActiveFolder] = useState("Desktop");
  return (
    <div
      className={`${className} w-lg h-96 rounded-lg bg-white/40 backdrop-blur-lg relative`}
    >
      <Header className="z-2 relative" onClose={onClose} />
      {/*Aside*/}
      <div className="h-full w-2/7 absolute top-0 left-0 rounded-l-lg bg-white/20 pt-6">
        <div className="flex flex-col home text-sm">
          <h4 className="text-gray-700 text-xs pl-1">Home</h4>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Desktop" ? "bg-sky-300/30" : ""} `}
            onClick={() => setActiveFolder("Desktop")}
          >
            <FaDesktop className="h-3 mr-1.5" />
            <span className="">Desktop</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Documents" ? "bg-sky-300/30" : ""} `}
            onClick={() => setActiveFolder("Documents")}
          >
            <DocumentTextIcon className="h-3.5 mr-1.5" />
            <span>Documents</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Downloads" ? "bg-sky-300/30" : ""} `}
            onClick={() => setActiveFolder("Downloads")}
          >
            <Download className="h-3.5 -ml-1" />
            <span>Downloads</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Pictures" ? "bg-sky-300/30" : ""} `}
            onClick={() => setActiveFolder("Pictures")}
          >
            <GalleryHorizontal className="h-3.5 -ml-1" />
            <span>Pictures</span>
          </button>
          <button
            onClick={() => setActiveFolder("Videos")}
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Videos" ? "bg-sky-300/30" : ""} `}
          >
            <VideoIcon className="h-3.5 -ml-1" />
            <span>Videos</span>
          </button>
        </div>
      </div>
      {/*Main*/}
      <div className="h-[calc(100%-1.5rem)] absolute top-6 right-0 w-5/7 rounded-br-lg flex flex-wrap p-4 gap-2 items-baseline">
        {folderContents[activeFolder]?.map((item, index) => (
          <button
            key={index}
            className="w-16 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => {
              if (item.type == "folder") {
                setActiveFolder(`${activeFolder}/${item.name}`);
              }
            }}
          >
            <img src={item.icon} className="h-14 w-auto" />
            <div className="text-xs text-white">{item.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
