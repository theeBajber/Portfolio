import { useRef, useState } from "react";
import Header from "./header";

export default function Terminal({ onClose, className }) {
  const [cwd, setcwd] = useState("~/");
  const fileSystem = {
    "~/": ["about.txt", "projects", "contact.txt"],
    "~/projects": ["screenworld", "calculator", "clock", "temp-converter"],
  };
  const mockFiles = {
    "about.txt": "Hi! I'm Faraj Salim, a passionate dev building cool stuff.",
    "contact.txt": "Email: faraj@example.com\nGitHub: github.com/bajber",
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
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
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
        const file = argument;
        if (fileSystem[cwd]?.includes(file) && mockFiles[file]) {
          output = mockFiles[file];
        } else {
          output = `cat: ${file}: No such file`;
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
      if (segments.length <= 1) return "~/";
      const newPath = segments.slice(0, -1).join("/") || "~/";
      return newPath.endsWith("/") ? newPath : newPath + "/";
    }
    if (path.startsWith("~/")) return path;
    if (path.startsWith("./")) {
      path = path.slice(2);
    }
    return cwd === "~/" ? `~/${path}` : `${cwd}/${path}`;
  };
  return (
    <div
      className={`h-80 w-96 bg-black/30 rounded-lg backdrop-blur-xl ${className} font-mono px-2 text-white`}
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
            {cwd}
            {">"}
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
