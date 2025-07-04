import { useRef } from "react";
import { patrick } from "./fonts";
import Header from "./header";

export default function ToDo({ className, onClose }) {
  const checkboxRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const toggleCheck = (e, ref) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.checked = !ref.current.checked;
    }
  };
  return (
    <div className={`${className} w-73 h-55 rounded-lg bg-yellow-200`}>
      <Header className={`${className}`} onClose={onClose} />
      <div
        className={`w-full flex flex-col px-3 py-2 text-sm todo-list ${patrick.className}`}
      >
        <button
          className="w-full flex items-center justify-evenly border-y-black border-y"
          onClick={(e) => toggleCheck(e, checkboxRefs[0])}
        >
          <input
            type="checkbox"
            readOnly
            className="scale-125 accent-yellow-500 peer"
            defaultChecked
            ref={checkboxRefs[0]}
          />
          <div className="w-4/5 text-left peer-checked:line-through h-fit">
            Build a portfolio
          </div>
        </button>
        <button
          className="w-full flex items-center justify-evenly border-b-black border-b"
          onClick={(e) => toggleCheck(e, checkboxRefs[1])}
        >
          <input
            type="checkbox"
            className="scale-125 accent-yellow-500 peer"
            readOnly
            ref={checkboxRefs[1]}
          />
          <div className="w-4/5 text-left peer-checked:line-through">
            Conquer the world (travel i mean 😈)
          </div>
        </button>
        <button
          className="w-full flex items-center justify-evenly border-b-black border-b"
          onClick={(e) => toggleCheck(e, checkboxRefs[2])}
        >
          <input
            type="checkbox"
            className="scale-125 accent-yellow-500 peer"
            readOnly
            ref={checkboxRefs[2]}
          />
          <div className="w-4/5 text-left peer-checked:line-through">
            Learn Cybersecurity
          </div>
        </button>
        <button
          className="w-full flex items-center justify-evenly border-b-black border-b"
          onClick={(e) => toggleCheck(e, checkboxRefs[3])}
        >
          <input
            type="checkbox"
            className="scale-125 accent-yellow-500 peer"
            defaultChecked
            readOnly
            ref={checkboxRefs[3]}
          />
          <div className="w-4/5 text-left peer-checked:line-through">
            Learn Next.js
          </div>
        </button>
      </div>
    </div>
  );
}
