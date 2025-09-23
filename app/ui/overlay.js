import { Monitor } from "lucide-react";
import { Smartphone } from "lucide-react";

export default function Overlay({ className, onClose }) {
  return (
    <div
      className={`h-screen w-full fixed top-0 left-0 z-1000 flex flex-col gap-3.5 items-center bg-white/20 backdrop-blur-xs ${className}`}
    >
      <img src="/swindle.svg" className="h-12 rotate-45 mr-70" />
      <div className="flex gap-2">
        <Smartphone className="text-slate-700" />
        <div className="text-xl font-bold">→</div>
        <Monitor className="text-emerald-800" />
      </div>
      <h2 className="font-bold text-xl">Best on Desktop</h2>
      <div className="px-6 text-center">
        Noon-OS is best suited for large screens. For the best experience,
        please visit on a laptop or a desktop computer.
      </div>
      <ul className="!list-disc">
        <li>Interactive draggable windows</li>
        <li>Full Desktop environment</li>
        <li>Optimal viewing experience</li>
      </ul>
      <button
        onClick={onClose}
        className="w-[55%] py-1 border rounded-lg cursor-pointer relative before:absolute before:w-full before:h-full before:-left-full before:top-0 hover:before:left-0 before:bg-gradient-to-br before:to-white/10 before:from-transparent before:transition-all before:ease-in before:content-[''] overflow-hidden"
      >
        Continue Anyway
      </button>
    </div>
  );
}
