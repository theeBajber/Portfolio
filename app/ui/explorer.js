import { FaDesktop } from "react-icons/fa";
import Header from "./header";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import {
  Download,
  VideoIcon,
  GalleryHorizontal,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  FolderClosed,
} from "lucide-react";
import { useState } from "react";

export const folderContents = {
  Desktop: [
    { name: "Projects", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Bin", icon: "/icons/Bin.png", type: "folder" },
    {
      name: "Skills.txt",
      type: "file",
      content: `- <strong>Programming:</strong> Python, JavaScript, Kotlin, Java, C <br>
- <strong>Web Development:</strong> React, Next.js, Node.js, Express, Tailwind <br>
- <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL <br>
- <strong>Tools & Platforms:</strong> Git, GitHub, Linux (Arch Btw), Neovim
`,
      icon: "/icons/IOCN.png",
    },
  ],
  "Desktop/Projects": [
    { name: "Ayra", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Screenworld", icon: "/icons/Folder1.png", type: "folder" },
    { name: "hackathon", icon: "/icons/Folder1.png", type: "folder" },
    { name: "weem", icon: "/icons/Folder1.png", type: "folder" },
    { name: "SpaceX", icon: "/icons/Folder1.png", type: "folder" },
    { name: "Calculator", icon: "/icons/Folder1.png", type: "folder" },
    { name: "ToDo", icon: "/icons/Folder1.png", type: "folder" },
  ],
  "Desktop/Projects/Ayra": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "AYRA — A portfolio-integrated AI assistant that answers queries to simulate a desktop-like assistant experience, developed using Next.js and gemini api.",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/theeBajber/Portfolio/blob/main/app/ui/ayra.js",
    },
    {
      name: "Ayra",
      type: "app",
      icon: "/icons/messages.png",
      url: "ayra",
    },
    {
      name: "Screenshot",
      url: "/screenshots/Ayra.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Projects/Screenworld": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "ScreenWorld — A sleek landing page designed to promote a digital marketing agency, built using vanilla JS and CSS.",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/theeBajber/screenworld",
    },
    {
      name: "Live.link",
      type: "link",
      icon: "/icons/Safari.png",
      url: "https://screenworld.co.ke/",
    },
    {
      name: "Screenshot",
      url: "/screenshots/Screenworld.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Projects/hackathon": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "Hackathon Portfolio: a collaborative Catppuccin-themed project built during PLP Hackathon July 2025. Includes FAQ, CV download, and responsive design.",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/theeBajber/plp-hackathon-portfolio",
    },
    {
      name: "Live.link",
      type: "link",
      icon: "/icons/Safari.png",
      url: "https://knf-portfolio.vercel.app/",
    },
    {
      name: "Screenshot",
      url: "/screenshots/Hackathon.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Projects/weem": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "WeemWeb is a lightweight website offering technical solutions to non-profits and organizations. Includes application forms, validation, and newsletter integrations. Used: Bootstrap and vanilla JS",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/istwahir/weemweb",
    },
    {
      name: "Live.link",
      type: "link",
      icon: "/icons/Safari.png",
      url: "https://weemweb.org/",
    },
    {
      name: "Screenshot",
      type: "image",
      url: "/screenshots/WeemWeb.png",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Projects/SpaceX": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "SpaceX UI Clone: A responsive landing page built with vanilla JS and CSS",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/theeBajber/plp-final-web",
    },
    {
      name: "Live.link",
      type: "link",
      icon: "/icons/Safari.png",
      url: "https://plp-final-web.vercel.app/",
    },
    {
      name: "Screenshot",
      url: "/screenshots/SpaceX.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Projects/Calculator": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "A web-based calculator app built with JS, styled using CSS, featuring draggable UI for Noon OS integration.",
    },
    {
      name: "Calculator",
      type: "app",
      icon: "/icons/Calculator.png",
      url: "calculator",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/theeBajber/calculator",
    },
    {
      name: "Screenshot",
      url: "/screenshots/calculator.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Projects/ToDo": [
    {
      name: "README.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content:
        "ToDo app built with React, Tailwind CSS, and integrated inside Noon OS as a draggable widget for productivity.",
    },
    {
      name: "ToDo",
      type: "app",
      icon: "/icons/Notes.png",
      url: "todo",
    },
    {
      name: "Github.link",
      type: "link",
      icon: "/icons/github.png",
      url: "https://github.com/theeBajber/Portfolio/blob/main/app/ui/toDo.js",
    },

    {
      name: "Screenshot",
      url: "/screenshots/ToDo.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  "Desktop/Bin": [],
  Downloads: [],
  Documents: [
    {
      name: "Resume.doc",
      type: "link",
      url: "./resume.doc",
      icon: "/icons/IOCN.png",
    },
    {
      name: "About.txt",
      type: "file",
      icon: "/icons/IOCN.png",
      content: `<strong>Faraj S. Ahmed</strong><br/>
    <strong>BSc Comp Sci</strong>, Mount Kenya Uni.<br/>
    I’m a software developer with a focus on web technologies and cybersecurity.<br/>
    I enjoy solving problems, building useful tools, and exploring new ideas through hackathons and collaborative projects.
  `,
    },
    { name: "Certificates", type: "folder", icon: "/icons/Folder1.png" },
  ],
  "Documents/Certificates": [
    {
      name: "Nextjs.png",
      url: "/photos/nextjs.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
    {
      name: "React.png",
      type: "image",
      url: "/photos/react.png",
      icon: "/icons/Pics.png",
    },
  ],
  Pictures: [
    {
      name: "Me.jpg",
      url: "/photos/Faraj cap brown.jpeg",
      type: "image",
      icon: "/icons/Pics.png",
    },
    {
      name: "My nvim.jpg",
      url: "/photos/Neovim IDE code.png",
      type: "image",
      icon: "/icons/Pics.png",
    },
  ],
  Videos: [],
};

export default function Explorer({
  className,
  onClose,
  openApp,
  opentxt,
  openimg,
}) {
  const [activeFolder, setActiveFolder] = useState("Desktop");
  const [history, setHistory] = useState(["Desktop"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const navigateTo = (folder) => {
    const newHistory = history.slice(0, historyIndex + 1);
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
      {/* Aside */}
      <div className="h-full w-2/7 absolute top-0 left-0 rounded-l-lg bg-white/20 pt-3">
        <div className="flex flex-col home text-sm overflow-hidden">
          <div className="flex flex-col w-full">
            <div className="ml-0.5 mb-1 flex items-center">
              <img src="/icons/Folder1.png" className="h-5" />
              <h4 className="text-gray-700 text-xs pl-1">Files</h4>
            </div>
          </div>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Desktop" ? "bg-emerald-300/30" : ""} truncate flex items-center`}
            onClick={() => navigateTo("Desktop")}
          >
            <FaDesktop className="h-3 mr-1.5" />
            <span>Desktop</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Documents" ? "bg-emerald-300/30" : ""} truncate flex items-center`}
            onClick={() => navigateTo("Documents")}
          >
            <DocumentTextIcon className="h-3.5 mr-1.5" />
            <span>Documents</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Downloads" ? "bg-emerald-300/30" : ""} truncate flex items-center`}
            onClick={() => navigateTo("Downloads")}
          >
            <Download className="h-3.5 -ml-1" />
            <span>Downloads</span>
          </button>
          <button
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Pictures" ? "bg-emerald-300/30" : ""} truncate flex items-center`}
            onClick={() => navigateTo("Pictures")}
          >
            <GalleryHorizontal className="h-3.5 -ml-1" />
            <span>Pictures</span>
          </button>
          <button
            onClick={() => navigateTo("Videos")}
            className={`hover:bg-gray-200/30 text-gray-700 ${activeFolder == "Videos" ? "bg-emerald-300/30" : ""} truncate flex items-center`}
          >
            <VideoIcon className="h-3.5 -ml-1" />
            <span>Videos</span>
          </button>
        </div>
      </div>
      {/* Main */}
      <div className="h-[calc(100%-1.5rem)] absolute top-6 right-0 w-5/7 rounded-br-lg">
        <div className="flex justify-evenly mt-1">
          <div className="flex [&>*]:border-emerald-500 [&>*]:cursor-pointer [&>*]:h-8 [&>*]:w-8 [&>*]:rounded-sm [&>*]:p-0.5 gap-0.5">
            <button
              disabled={historyIndex == 0}
              onClick={() => {
                if (historyIndex > 0) {
                  setHistoryIndex(historyIndex - 1);
                  setActiveFolder(history[historyIndex - 1]);
                }
              }}
              className={historyIndex == 0 ? "" : "hover:border"}
            >
              <ChevronLeft className={historyIndex == 0 ? "opacity-30" : ""} />
            </button>
            <button
              onClick={() => {
                if (historyIndex < history.length - 1) {
                  setHistoryIndex(historyIndex + 1);
                  setActiveFolder(history[historyIndex + 1]);
                }
              }}
              disabled={historyIndex == history.length - 1}
              className={
                historyIndex == history.length - 1 ? "" : "hover:border"
              }
            >
              <ChevronRight
                className={
                  historyIndex == history.length - 1 ? "opacity-30" : ""
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
                if (item.type === "folder") {
                  navigateTo(`${activeFolder}/${item.name}`);
                } else if (item.type === "link") {
                  window.open(item.url, "_blank");
                } else if (item.type === "app") {
                  openApp(item.url);
                } else if (item.type == "file") {
                  opentxt({ name: item.name, content: item.content });
                } else if (item.type == "image") {
                  openimg({ name: item.name, content: item.url });
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
