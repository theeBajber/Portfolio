import { useRef, useState } from "react";
import Header from "./header";

export default function Terminal({ onClose, className }) {
  const [cwd, setcwd] = useState("~/");
  const fileSystem = {
    "~/": ["Desktop", "Documents", "Downloads", "Pictures", "Videos"],
    "~/Desktop": ["Projects", "Bin", "Skills.txt"],
    "~/Desktop/Projects": [
      "Ayra",
      "Screenworld",
      "hackathon",
      "weem",
      "SpaceX",
      "Calculator",
      "ToDo",
    ],
    "~/Desktop/Projects/Ayra": [
      "README.txt",
      "Github.link",
      "Live.link",
      "Screenshot.jpg",
    ],
    "~/Desktop/Projects/Screenworld": [
      "README.txt",
      "Github.link",
      "Ayra",
      "Screenshot.jpg",
    ],
    "~/Desktop/Projects/hackathon": [
      "README.txt",
      "Github.link",
      "Live.link",
      "Screenshot.jpg",
    ],
    "~/Desktop/Projects/weem": [
      "README.txt",
      "Github.link",
      "Live.link",
      "Screenshot.jpg",
    ],
    "~/Desktop/Projects/SpaceX": [
      "README.txt",
      "Github.link",
      "Live.link",
      "Screenshot.jpg",
    ],
    "~/Desktop/Projects/Calculator": [
      "README.txt",
      "Github.link",
      "Calculator",
      "Screenshot.jpg",
    ],
    "~/Desktop/Projects/ToDo": [
      "README.txt",
      "Github.link",
      "ToDo",
      "Screenshot.jpg",
    ],
    "~/Desktop/Bin": [],
    "~/Documents": ["Resume.doc", "About.txt", "Certificates"],
    "~/Documents/Certificates": ["Nextjs.png", "React.png"],
    "~/Downloads": [],
    "~/Pictures": ["Me.jpg", "My nvim.jpg"],
    "~/Videos": [],
  };
  const mockFiles = {
    "~/Desktop/Skills.txt":
      "-Programming: Python, JavaScript, Kotlin, Java, C - Web Development: React, Next.js, Node.js, Express, Tailwind - Databases: MySQL, MongoDB, PostgreSQL - Tools & Platforms: Git, GitHub, Linux (Arch Btw), Neovim",
    "~/Desktop/Projects/Ayra/README.txt":
      "AYRA — A portfolio-integrated AI assistant that answers queries to simulate a desktop-like assistant experience, developed using Next.js and gemini api.",
    "~/Desktop/Projects/Screenworld/README.txt":
      "ScreenWorld — A sleek landing page designed to promote a digital marketing agency, built using vanilla JS and CSS.",
    "~/Desktop/Projects/hackathon/README.txt":
      "Hackathon Portfolio: a collaborative Catppuccin-themed project built during PLP Hackathon July 2025. Includes FAQ, CV download, and responsive design.",
    "~/Desktop/Projects/weem/README.txt":
      "WeemWeb is a lightweight website offering technical solutions to non-profits and organizations. Includes application forms, validation, and newsletter integrations. Used: Bootstrap and vanilla JS",
    "~/Desktop/Projects/SpaceX/README.txt":
      "SpaceX UI Clone: A responsive landing page built with vanilla JS and CSS",
    "~/Desktop/Projects/Calculator/README.txt":
      "A web-based calculator app built with JS, styled using CSS, featuring draggable UI for Noon OS integration.",
    "~/Desktop/Projects/ToDo/README.txt":
      "ToDo app built with React, Tailwind CSS, and integrated inside Noon OS as a draggable widget for productivity.",
    "~/Documents/About.txt":
      "- Faraj S. Ahmed - BSc Computer Science, Mount Kenya University - I’m a software developer with a focus on web technologies and cybersecurity. - I enjoy solving problems, building useful tools, and exploring new ideas through hackathons and collaborative projects.",
  };
  const validCommands = [
    "help",
    "ls",
    "cd",
    "cat",
    "echo",
    "pwd",
    "clear",
    "date",
  ];
  const [history, setHistory] = useState([
    "Welcome to Farsh Terminal 💻",
    "Type 'help' to see available commands.",
    "------------------------------------------",
  ]);
  const [input, setInput] = useState("help");
  const [historyIndex, setHistoryIndex] = useState(null);
  const inputRef = useRef(null);
  function handleKey(e) {
    if (e.key == "Enter") {
      handleCommand(input);
      setHistoryIndex(null);
    } else if (e.key == "ArrowUp") {
      if (history.length == 0) return;
      setHistoryIndex((prev) => {
        const newIndex = prev === null ? history.length - 2 : prev - 2;
        const validIndex = Math.max(newIndex, 0);
        setInput(
          history[validIndex] ? history[validIndex].replace(/^\$ /, "") : "",
        );
        return validIndex;
      });
    } else if (e.key == "ArrowDown") {
      if (history.length == 0 || historyIndex == null) return;
      const newIndex = historyIndex + 2;
      if (newIndex >= history.length) {
        setInput("");
        setHistoryIndex(null);
      } else {
        setInput(history[newIndex].replace(/^\$ /, ""));
        setHistoryIndex(newIndex);
      }
    }
  }
  const handleCommand = (cmd) => {
    const args = cmd.trim().split(" ");
    const command = args[0];
    const argument = args.slice(1).join(" ");
    let output = "";

    switch (command) {
      case "help":
        output =
          "Available commands: help, echo, cat, ls, cd, pwd, clear, date";
        break;
      case "pwd":
        output = cwd;
        break;
      case "echo":
        output = argument;
        break;
      case "cd":
        const targetpath = resolvePath(argument);
        if (fileSystem[targetpath]) {
          setcwd(targetpath);
          output = "";
        } else {
          output = `cd: No such file or directory`;
        }
        break;
      case "ls":
        const contents = fileSystem[cwd];
        if (contents) {
          output = contents
            .map((item) => {
              const fullpath = resolvePath(item);
              return fileSystem[fullpath]
                ? `<span class="text-blue-500 font-semibold">${item}</span>`
                : item;
            })
            .join(" ");
        } else {
          output = `ls: Cannot access ${cwd}`;
        }
        break;
      case "date":
        output = new Date().toLocaleString();
        break;
      case "cat":
        if (!argument) {
          output = "cat: Missing filename";
          break;
        }
        const fullPath = resolvePath(argument);

        if (mockFiles[fullPath] !== undefined) {
          output = mockFiles[fullPath] || "(empty file)";
        } else {
          output = `cat: ${argument}: No such file`;
        }
        break;
      case "clear":
        setHistory([]);
        break;
      default:
        output = `${command}: command not found`;
        break;
    }
    setHistory((prev) => [...prev, `$ ${cmd}`, output]);
    setInput("");
  };
  const resolvePath = (path) => {
    if (path === "~" || path === "~/" || !path) return "~/";
    if (path === "." || path === "./") return cwd;
    if (path === "..") {
      const segments = cwd.split("/");
      if (segments.length <= 2) return "~/";
      const newPath = segments.slice(0, -1).join("/");
      return newPath;
    }
    if (path.startsWith("~/")) return path;
    if (path.startsWith("./")) {
      path = path.slice(2);
    }
    return cwd === "~/" ? `~/${path}` : `${cwd}/${path}`;
  };
  const shortenPath = (path) => {
    if (path === "~/" || path === "~") return "~/";
    const parts = path.split("/");
    if (parts.length > 3) {
      return `.../${parts.slice(-1).join("/")}`;
    }
    return path;
  };
  return (
    <div
      className={`h-80 w-full min-w-76 sm:w-96 bg-black/30 rounded-lg backdrop-blur-xl ${className} font-mono px-2 text-white`}
      onClick={() => inputRef.current?.focus()}
    >
      <Header onClose={onClose} className="" />
      <div className="h-[calc(100%-2rem)] flex flex-col overflow-y-auto">
        <div className="py-2 text-xs whitespace-pre-wrap">
          {history.map((entry, index) => {
            if (entry.startsWith("$ ")) {
              const cmdword = entry.split(" ")[1];
              const isValid = validCommands.includes(cmdword);
              return (
                <div key={index}>
                  <span>$ </span>
                  <span
                    className={`${isValid ? "text-emerald-600" : "text-rose-400"}`}
                  >
                    {cmdword}
                  </span>
                  {" " + entry.split(" ").slice(2).join(" ")}
                </div>
              );
            }
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: entry }} />
            );
          })}
        </div>
        <div className="text-sm flex items-center w-fit">
          <span className="mx-1 text-emerald-400">
            {shortenPath(cwd)}
            <span className="text-blue-400 pb-1 ml-1">{"→"}</span>
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            className="focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
