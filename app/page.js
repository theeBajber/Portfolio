"use client";

import { useState } from "react";
import Calculator from "./ui/Calculator";
import Player from "./ui/Player";
import StatusBar from "./ui/Statusbar";
import Taskbar from "./ui/Taskbar";
import Draggable from "./ui/draggable";
import dynamic from "next/dynamic";
import Contact from "./ui/contact";
import Browser from "./ui/browser";
import { FcOk } from "react-icons/fc";

export default function Home() {
  const [calcShown, setCalcShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const toggleCalc = () => {
    setCalcShown(!calcShown);
  };
  const toggleContact = () => {
    setContactShown(!contactShown);
  };

  return (
    <div className="min-h-screen">
      <StatusBar className="w-full fixed top-0 left-0 h-6" />
      <Taskbar
        onCalcClick={toggleCalc}
        onContactClick={toggleContact}
        className="w-[35%] h-16 fixed bottom-8 left-1/2 -translate-x-1/2"
      />
      <Player className="fixed top-10 left-3 w-[30%] h-40" />
      <Draggable handleClass=".drag-handle">
        <Calculator
          className={`w-[280px] h-[450px] ${calcShown ? "flex" : "hidden"}`}
          onClose={toggleCalc}
        />
      </Draggable>
      <Clock className={"fixed w-[320px] h-[280px] right-3 top-5 -z-1"} />
      <Draggable handleClass=".drag-handle">
        <Contact
          className={`h-45 w-80 ${contactShown ? "block" : "hidden"}`}
          onClose={toggleContact}
        />
      </Draggable>
      <Draggable handleClass=".drag-handle">
        <Browser className="" />
      </Draggable>
    </div>
  );
}

const Clock = dynamic(() => import("./ui/clock"), {
  ssr: false,
});
