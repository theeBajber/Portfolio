"use client";

import { useState } from "react";
import Calculator from "./ui/Calculator";
import Player from "./ui/Player";
import StatusBar from "./ui/Statusbar";
import Taskbar from "./ui/Taskbar";
import Draggable from "./ui/draggable";
import dynamic from "next/dynamic";
import Contact from "./ui/contact";
import Terminal from "./ui/terminal";
import ToDo from "./ui/toDo";
import Explorer from "./ui/explorer";
import Shoofly from "./ui/browser";
import Ayra from "./ui/ayra";
import Pics from "./ui/pics";
import { Launcher } from "./ui/launcher";
import { Analytics } from "@vercel/analytics/next";
import TicTacToe from "./ui/tic-tac-toe";
import Overlay from "./ui/overlay";
import { handleClientScriptLoad } from "next/script";
import TextViewer from "./ui/textViewer";
import ImageViewer from "./ui/imageViwer";

export default function Home() {
  const [calcShown, setCalcShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [browsershown, setBrowserShown] = useState(false);
  const [termShown, setTermShown] = useState(false);
  const [todoShown, setTodoShown] = useState(false);
  const [finderShown, setFinderShown] = useState(false);
  const [ayraShown, setAyraShown] = useState(false);
  const [ticTacToeShown, setTicTacToeShown] = useState(false);
  const [picsShown, setPicsShown] = useState(false);
  const [launcherShown, setLauncherShown] = useState(false);
  const [overlayShown, setOverlayShown] = useState(true);

  const [textViewer, setTextViewer] = useState(null);
  const [imageViewer, setImageViewer] = useState(null);
  const [focusid, setFocusid] = useState(null);
  const [zOrder, setZOrder] = useState([]);
  const bringToFront = (id) => {
    setZOrder((prev) => {
      const without = prev.filter((w) => w !== id);
      return [...without, id];
    });
    setFocusid(id);
  };
  const getZIndex = (id) => 100 + zOrder.indexOf(id);

  const toggleCalc = () => {
    setCalcShown(!calcShown);
  };
  const toggleContact = () => {
    setContactShown(!contactShown);
  };
  const toggleBrowser = () => {
    setBrowserShown(!browsershown);
  };
  const toggleTerm = () => {
    setTermShown(!termShown);
  };
  const toggleToDo = () => {
    setTodoShown(!todoShown);
  };
  const toggleFinder = () => {
    setFinderShown(!finderShown);
  };
  const toggleAyra = () => {
    setAyraShown(!ayraShown);
  };
  const togglePics = () => {
    setPicsShown(!picsShown);
  };
  const toggleLauncher = () => {
    setLauncherShown(!launcherShown);
  };
  const toggleTicTacToe = () => {
    setTicTacToeShown(!ticTacToeShown);
  };
  const toggleOverlay = () => {
    setOverlayShown(!overlayShown);
  };
  const handleLaunchApp = (appName) => {
    switch (appName) {
      case "calculator":
        setCalcShown(true);
        break;
      case "ayra":
        setAyraShown(true);
        break;
      case "terminal":
        setTermShown(true);
        break;
      case "pics":
        setPicsShown(true);
        break;
      case "shoofly":
        setBrowserShown(true);
        break;
      case "contact":
        setContactShown(true);
        break;
      case "files":
        setFinderShown(true);
        break;
      case "todo":
        setTodoShown(true);
        break;
      case "tic-tac-toe":
        setTicTacToeShown(true);
        break;
      case "player":
        alert("Player is shown as a widget on Desktop");
        break;
      case "clock":
        alert("Clock is shown as a widget on Desktop");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen">
      <Overlay
        className={`${overlayShown ? "sm:hidden" : "hidden"}`}
        onClose={toggleOverlay}
      />
      <Analytics />
      <StatusBar className="w-full fixed top-0 left-0 h-6" />
      <Taskbar
        onCalcClick={toggleCalc}
        onContactClick={toggleContact}
        onBrowserClick={toggleBrowser}
        onTermClick={toggleTerm}
        onTodoClick={toggleToDo}
        onFinderClick={toggleFinder}
        onAyraClick={toggleAyra}
        onPicsClick={togglePics}
        onLauncherClick={toggleLauncher}
        className="sm:w-[35%] fixed bottom-8 left-1/2 -translate-x-1/2"
      />
      <Player className="fixed top-10 sm:left-3 sm:translate-x-0 -translate-x-1/2 left-1/2 w-[85%] sm:w-1/3 h-40" />
      <Draggable onMouseDown={() => bringToFront("calculator")}>
        <Calculator
          className={`w-[280px] h-[450px] ${calcShown ? "flex" : "hidden"}`}
          onClose={toggleCalc}
          style={{ zIndex: getZIndex("calculator") }}
        />
      </Draggable>
      <Clock
        className={
          "fixed w-[320px] h-[280px] right-3 top-5 -z-1 hidden sm:block"
        }
      />
      <Draggable onMouseDown={() => bringToFront("contact")}>
        <Contact
          className={`h-50 w-80 ${contactShown ? "block" : "hidden"}`}
          onClose={toggleContact}
          style={{ zIndex: getZIndex("contact") }}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        onMouseDown={() => bringToFront("shoofly")}
      >
        <Shoofly
          className={`${browsershown ? "block" : "hidden"} `}
          onClose={toggleBrowser}
          style={{ zIndex: getZIndex("shoofly") }}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        onMouseDown={() => bringToFront("terminal")}
        style={{ zIndex: getZIndex("terminal") }}
      >
        <Terminal
          className={`${termShown ? "block" : "hidden"}`}
          onClose={toggleTerm}
        />
      </Draggable>
      <Draggable onMouseDown={() => bringToFront("todo")}>
        <ToDo
          className={`${todoShown ? "block" : "hidden"}`}
          onClose={toggleToDo}
        />
      </Draggable>
      <Draggable
        className="w-[95%] sm:w-auto"
        onMouseDown={() => bringToFront("explorer")}
      >
        <Explorer
          className={`${finderShown ? "block" : "hidden"}`}
          onClose={toggleFinder}
          openApp={handleLaunchApp}
          opentxt={(file) => setTextViewer(file)}
          openimg={(file) => setImageViewer(file)}
        />
      </Draggable>
      <Draggable onMouseDown={() => bringToFront("ayra")}>
        <Ayra
          className={`${ayraShown ? "flex" : "hidden"}`}
          onClose={toggleAyra}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        onMouseDown={() => bringToFront("pics")}
      >
        <Pics
          className={`${picsShown ? "block" : "hidden"}`}
          onClose={togglePics}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        onMouseDown={() => bringToFront("tictactoe")}
      >
        <TicTacToe
          className={`${ticTacToeShown ? "block" : "hidden"}`}
          onClose={toggleTicTacToe}
        />
      </Draggable>
      <Draggable onMouseDown={() => bringToFront("textviewer")}>
        {textViewer && (
          <TextViewer
            onClose={() => setTextViewer(null)}
            txt={textViewer.content}
          />
        )}
      </Draggable>
      <Draggable onMouseDown={() => bringToFront("imageviewer")}>
        {imageViewer && (
          <ImageViewer
            onClose={() => setImageViewer(null)}
            src={imageViewer.content}
          />
        )}
      </Draggable>
      <Launcher
        className={`${launcherShown ? "flex" : "hidden"}`}
        onClose={toggleLauncher}
        onLaunchApp={handleLaunchApp}
      />
    </div>
  );
}

const Clock = dynamic(() => import("./ui/clock"), {
  ssr: false,
});
