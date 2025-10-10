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
  const [openApps, setOpenApps] = useState([]);
  const [textViewer, setTextViewer] = useState(null);
  const [imageViewer, setImageViewer] = useState(null);

  const bringToFront = (appName) => {
    setOpenApps((prev) => {
      const filtered = prev.filter((a) => a !== appName);
      return [...filtered, appName];
    });
  };
  const toggleCalc = () => {
    bringToFront("calculator");
    setCalcShown(!calcShown);
  };
  const toggleContact = () => {
    bringToFront("contact");
    setContactShown(!contactShown);
  };
  const toggleBrowser = () => {
    bringToFront("shoofly");
    setBrowserShown(!browsershown);
  };
  const toggleTerm = () => {
    bringToFront("terminal");
    setTermShown(!termShown);
  };
  const toggleToDo = () => {
    bringToFront("todo");
    setTodoShown(!todoShown);
  };
  const toggleFinder = () => {
    bringToFront("files");
    setFinderShown(!finderShown);
  };
  const toggleAyra = () => {
    bringToFront("ayra");
    setAyraShown(!ayraShown);
  };
  const togglePics = () => {
    bringToFront("pics");
    setPicsShown(!picsShown);
  };
  const toggleLauncher = () => {
    setLauncherShown(!launcherShown);
  };
  const toggleTicTacToe = () => {
    bringToFront("tic-tac-toe");
    setTicTacToeShown(!ticTacToeShown);
  };
  const toggleOverlay = () => {
    setOverlayShown(!overlayShown);
  };
  const handleLaunchApp = (appName) => {
    bringToFront(appName);
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
      <Draggable
        styles={{ zIndex: openApps.indexOf("calculator") + 10 }}
        onmousedown={() => {
          bringToFront("calculator");
          console.log("clicked");
        }}
      >
        <Calculator
          className={`w-[280px] h-[450px] ${calcShown ? "flex" : "hidden"}`}
          onClose={toggleCalc}
        />
      </Draggable>
      <Clock
        className={
          "fixed w-[320px] h-[280px] right-3 top-5 -z-1 hidden sm:block"
        }
      />
      <Draggable
        styles={{ zIndex: openApps.indexOf("contact") + 10 }}
        onmousedown={() => {
          bringToFront("contact");
          console.log("clicked");
        }}
      >
        <Contact
          className={`h-50 w-80 ${contactShown ? "block" : "hidden"}`}
          onClose={toggleContact}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        styles={{ zIndex: openApps.indexOf("shoofly") + 10 }}
        onmousedown={() => {
          bringToFront("shoofly");
          console.log("clicked");
        }}
      >
        <Shoofly
          className={`${browsershown ? "block" : "hidden"} `}
          onClose={toggleBrowser}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        styles={{ zIndex: openApps.indexOf("terminal") + 10 }}
        onmousedown={() => {
          bringToFront("terminal");
          console.log("clicked");
        }}
      >
        <Terminal
          className={`${termShown ? "block" : "hidden"}`}
          onClose={toggleTerm}
        />
      </Draggable>
      <Draggable
        styles={{ zIndex: openApps.indexOf("todo") + 10 }}
        onmousedown={() => {
          bringToFront("todo");
          console.log("clicked");
        }}
      >
        <ToDo
          className={`${todoShown ? "block" : "hidden"}`}
          onClose={toggleToDo}
        />
      </Draggable>
      <Draggable
        className="w-[95%] sm:w-auto"
        styles={{ zIndex: openApps.indexOf("files") + 10 }}
        onmousedown={() => {
          bringToFront("files");
          console.log("clicked");
        }}
      >
        <Explorer
          className={`${finderShown ? "block" : "hidden"}`}
          onClose={toggleFinder}
          openApp={handleLaunchApp}
          opentxt={(file) => setTextViewer(file)}
          openimg={(file) => setImageViewer(file)}
        />
      </Draggable>
      <Draggable
        styles={{ zIndex: openApps.indexOf("ayra") + 10 }}
        onmousedown={() => {
          bringToFront("ayra");
          console.log("clicked");
        }}
      >
        <Ayra
          className={`${ayraShown ? "flex" : "hidden"}`}
          onClose={toggleAyra}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        styles={{ zIndex: openApps.indexOf("pics") + 10 }}
        onmousedown={() => {
          bringToFront("pics");
          console.log("clicked");
        }}
      >
        <Pics
          className={`${picsShown ? "block" : "hidden"}`}
          onClose={togglePics}
        />
      </Draggable>
      <Draggable
        className="w-[90%] sm:w-auto"
        styles={{ zIndex: openApps.indexOf("tic-tac-toe") + 10 }}
        onmousedown={() => {
          bringToFront("tic-tac-toe");
          console.log("clicked");
        }}
      >
        <TicTacToe
          className={`${ticTacToeShown ? "block" : "hidden"}`}
          onClose={toggleTicTacToe}
        />
      </Draggable>
      <Draggable>
        {textViewer && (
          <TextViewer
            onClose={() => setTextViewer(null)}
            txt={textViewer.content}
          />
        )}
      </Draggable>
      <Draggable>
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
