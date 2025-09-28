import { FaDesktop } from "react-icons/fa";
import Header from "./header";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Download } from "lucide-react";
import { VideoIcon } from "lucide-react";
import { GalleryHorizontal } from "lucide-react";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { FolderClosed } from "lucide-react";

const folderContents = {
  Desktop: [
    { name: "Projects", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Bin", icon: "/icons/Bin.png", type: "folder" },
    { name: "Skills.doc", icon: "/icons/Terminal.png" },
  ],
  "Desktop/Projects": [
    { name: "Ayra", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Screenworld", icon: "icons/Folder1.png", type: "folder" },
    { name: "Calculator", icon: "icons/Folder1.png", type: "folder" },
    { name: "ToDo", icon: "icons/Folder1.png", type: "folder" },
  ],
  "Desktop/Bin": [],
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
  const [history, setHistory] = useState(["Desktop"]);
  const [historyindex, setHistoryIndex] = useState(0);
  const navigateTo = (folder) => {
    const newHistory = history.slice(0, historyindex + 1);
    newHistory.push(folder);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setActiveFolder(folder);
  };
  return (
    <div
      className={`${className} w-full sm:w-lg h-96 rounded-lg bg-white/40 backdrop-blur-lg relative`}
    >
      <Header className="z-2 relative" onClose={onClose} />
      {/*Aside*/}
      <div className="h-full w-2/7 absolute top-0 left-0 rounded-l-lg bg-white/20 pt-3">
        <div className="flex flex-col home text-sm overflow-hidden">
          <div className="flex flex-col w-full">
            <div className="ml-0.5 mb-1 flex items-center">
              <img src="/icons/Folder1.png" className="h-5" />
              <h4 className="text-gray-700 text-xs pl-1">Files</h4>
            </div>
          </div>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Desktop" ? "bg-emerald-300/30" : ""} truncate `}
            onClick={() => navigateTo("Desktop")}
          >
            <FaDesktop className="h-3 mr-1.5" />
            <span className="">Desktop</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Documents" ? "bg-emerald-300/30" : ""} truncate`}
            onClick={() => navigateTo("Documents")}
          >
            <DocumentTextIcon className="h-3.5 mr-1.5" />
            <span>Documents</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Downloads" ? "bg-emerald-300/30" : ""} truncate`}
            onClick={() => navigateTo("Downloads")}
          >
            <Download className="h-3.5 -ml-1" />
            <span>Downloads</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Pictures" ? "bg-emerald-300/30" : ""} truncate`}
            onClick={() => navigateTo("Pictures")}
          >
            <GalleryHorizontal className="h-3.5 -ml-1" />
            <span>Pictures</span>
          </button>
          <button
            onClick={() => navigateTo("Videos")}
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Videos" ? "bg-emerald-300/30" : ""} truncate`}
          >
            <VideoIcon className="h-3.5 -ml-1" />
            <span>Videos</span>
          </button>
        </div>
      </div>
      {/*Main*/}
      <div className="h-[calc(100%-1.5rem)] absolute top-6 right-0 w-5/7 rounded-br-lg">
        <div className="flex justify-evenly mt-1">
          <div className=" flex [&>*]:border-emerald-500 [&>*]:cursor-pointer [&>*]:h-8 [&>*]:w-8 [&>*]:rounded-sm [&>*]:p-0.5 gap-0.5">
            <button
              disabled={historyindex == 0}
              onClick={() => {
                if (historyindex > 0) {
                  setHistoryIndex(historyindex - 1);
                  setActiveFolder(history[historyindex - 1]);
                }
              }}
              className={historyindex == 0 ? "" : "hover:border"}
            >
              <ChevronLeft className={historyindex == 0 ? "opacity-30" : ""} />
            </button>
            <button
              onClick={() => {
                if (historyindex < history.length - 1) {
                  setHistoryIndex(historyindex + 1);
                  setActiveFolder(history[historyindex + 1]);
                }
              }}
              disabled={historyindex == history.length - 1}
              className={
                historyindex == history.length - 1 ? "" : "hover:border"
              }
            >
              <ChevronRight
                className={
                  historyindex == history.length - 1 ? "opacity-30" : ""
                }
              />
            </button>
          </div>
          <div className="border border-gray-500 rounded-sm w-[75%] bg-white/40 flex items-center px-1 overflow-hidden">
            <FolderClosed className="mr-1 h-4" />
            <div className="flex items-center text-sm font-mono truncate">
              {activeFolder.split("/").map((part, idx, arr) => {
                const path = arr.slice(0, idx + 1).join("/");
                return (
                  <span key={path} className="flex items-center shrink-0">
                    <span
                      onClick={() => navigateTo(path)}
                      className="cursor-pointer hover:underline"
                    >
                      {part}
                    </span>
                    {idx < arr.length - 1 && (
                      <ChevronRight className="h-3 shrink-0" />
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap p-4 gap-2 items-baseline">
          {folderContents[activeFolder]?.map((item, index) => (
            <button
              key={index}
              className="w-16 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                if (item.type == "folder") {
                  navigateTo(`${activeFolder}/${item.name}`);
                }
              }}
            >
              <img src={item.icon} className="h-14 w-auto" />
              <div className="text-xs text-black">{item.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
