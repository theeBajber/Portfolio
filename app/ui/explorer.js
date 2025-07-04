import { FaDesktop } from "react-icons/fa";
import Header from "./header";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Download } from "lucide-react";
import { VideoIcon } from "lucide-react";
import { GalleryHorizontal } from "lucide-react";

export default function Explorer({ className, onClose }) {
  return (
    <div
      className={`${className} w-lg h-96 rounded-lg bg-white/40 backdrop-blur-lg relative`}
    >
      <Header className="z-2 relative" onClose={onClose} />
      {/*Aside*/}
      <div className="h-full w-2/7 absolute top-0 left-0 rounded-l-lg bg-white/20 pt-6">
        <div className="flex flex-col home text-sm">
          <h4 className="text-gray-700 text-xs pl-1">Home</h4>
          <button className="hover:bg-gray-200/30 text-gray-700">
            <FaDesktop className="h-3 mr-1.5" />
            <span className="">Desktop</span>
          </button>
          <button className="hover:bg-gray-200/30 text-gray-700">
            <DocumentTextIcon className="h-3.5 mr-1.5" />
            <span>Documents</span>
          </button>
          <button className="hover:bg-gray-200/30 text-gray-700">
            <Download className="h-3.5 -ml-1" />
            <span>Downloads</span>
          </button>
          <button className="hover:bg-gray-200/30 text-gray-700">
            <GalleryHorizontal className="h-3.5 -ml-1" />
            <span>Pictures</span>
          </button>
          <button className="hover:bg-gray-200/30 text-gray-700">
            <VideoIcon className="h-3.5 -ml-1" />
            <span>Videos</span>
          </button>
        </div>
      </div>
      {/*Main*/}
      <div className="h-[calc(100%-1.5rem)] absolute top-6 right-0 w-5/7 rounded-br-lg flex flex-col">
        <div className="h-1/5 w-full flex items-center">
          <button className="w-16 flex flex-col justify-center items-center cursor-pointer">
            <img src="/icons/Folder_Common.png" className="h-12 w-auto" />
            <div className="text-xs text-white">Projects</div>
          </button>
          <button className="w-16 flex flex-col justify-center items-center cursor-pointer">
            <img src="/icons/Terminal.png" className="h-12 w-auto" />
            <div className="text-xs text-white">Bin</div>
          </button>
        </div>
      </div>
    </div>
  );
}
