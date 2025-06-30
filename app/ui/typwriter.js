"use client";
import { useEffect, useState } from "react";

export default function Typwriter({ text = "", speed = 100, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset for new text
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div
      className={`${className} after:content-['|'] after:animate-pulse after:font-normal`}
    >
      {displayed}
    </div>
  );
}
