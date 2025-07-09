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

export default function Home() {
  const [calcShown, setCalcShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [browsershown, setBrowserShown] = useState(false);
  const [termShown, setTermShown] = useState(false);
  const [todoShown, setTodoShown] = useState(false);
  const [finderShown, setFinderShown] = useState(false);
  const [ayraShown, setAyraShown] = useState(false);
  const [picsShown, setPicsShown] = useState(false);
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

  return (
    <div className="min-h-screen">
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
        className="w-[35%] h-16 fixed bottom-8 left-1/2 -translate-x-1/2"
      />
      <Player className="fixed top-10 left-3 w-[30%] h-40" />
      <Draggable>
        <Calculator
          className={`w-[280px] h-[450px] ${calcShown ? "flex" : "hidden"}`}
          onClose={toggleCalc}
        />
      </Draggable>
      <Clock className={"fixed w-[320px] h-[280px] right-3 top-5 -z-1"} />
      <Draggable>
        <Contact
          className={`h-50 w-80 ${contactShown ? "block" : "hidden"}`}
          onClose={toggleContact}
        />
      </Draggable>
      <Draggable>
        <Shoofly
          className={`${browsershown ? "block" : "hidden"} `}
          onClose={toggleBrowser}
        />
      </Draggable>
      <Draggable>
        <Terminal
          className={`${termShown ? "block" : "hidden"}`}
          onClose={toggleTerm}
        />
      </Draggable>
      <Draggable>
        <ToDo
          className={`${todoShown ? "block" : "hidden"}`}
          onClose={toggleToDo}
        />
      </Draggable>
      <Draggable>
        <Explorer
          className={`${finderShown ? "block" : "hidden"}`}
          onClose={toggleFinder}
        />
      </Draggable>
      <Draggable>
        <Ayra
          className={`${ayraShown ? "flex" : "hidden"}`}
          onClose={toggleAyra}
        />
      </Draggable>
      <Draggable>
        <Pics
          className={`${picsShown ? "block" : "hidden"}`}
          onClose={togglePics}
        />
      </Draggable>
    </div>
  );
}

const Clock = dynamic(() => import("./ui/clock"), {
  ssr: false,
});
