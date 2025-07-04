import { User } from "lucide-react";
import Header from "./header";
import { QRCodeSVG } from "qrcode.react";
import { Github } from "lucide-react";
import { Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact({ className, onClose }) {
  return (
    <div
      className={`bg-white/20 backdrop-blur-lg rounded-lg flex flex-col ${className}`}
    >
      <Header onClose={onClose} className={``} />
      <div className="h-1/4 w-full flex items-center justify-between border-b">
        <div className="flex w-[52%] items-center justify-between">
          <div className="w-14 flex items-center">
            <div className="h-6 bg-black w-6 absolute left-0"></div>
            <div className="rounded-full h-8 aspect-square bg-emerald-400 flex items-center justify-center z-3 absolute left-4">
              <User className="h-6" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm">Faraj S.Ahmed</div>
            <div className="text-xs text-gray-700">Software Engineer</div>
          </div>
        </div>
        <div className="text-2xl font-extrabold mr-3">ن</div>
      </div>
      <div className="w-full h-[calc(75%-1.25rem)] rounded-b-lg flex items-center justify-between pl-6">
        <QRCodeSVG value="faraj" size={45} bgColor="#ffffff00" />
        <div className="h-[80%] rounded-l-lg w-[70%] bg-emerald-500 flex items-center">
          <div className="h-[90%] w-[25%] flex flex-col justify-evenly items-center">
            <div className="rounded-tr-lg text-emerald-600 rounded-bl-lg bg-black h-[18%] flex justify-center items-center">
              <Phone className="h-[65%]" />
            </div>
            <div className="rounded-tr-lg text-emerald-600 rounded-bl-lg bg-black h-[18%] flex justify-center items-center">
              <Mail className="h-[65%]" />
            </div>
            <div className="rounded-tr-lg text-emerald-600 rounded-bl-lg bg-black h-[18%] flex justify-center items-center">
              <Github className="h-[65%]" />
            </div>
            <div className="rounded-tr-lg text-emerald-600 rounded-bl-lg bg-black h-[18%] flex justify-center items-center">
              <Linkedin className="h-[65%]" />
            </div>
          </div>
          <div className="h-[90%] text-black flex-col flex justify-evenly items-baseline text-sm">
            <Link href="https://wa.me/254113199693?text=Hello%2C%20I%20found%20your%20number%20on%20your%20portfolio">
              +254 113 199693
            </Link>
            <Link href={"mailto:ajrafsalim@gmail.com"}>
              ajrafsalim@gmail.com
            </Link>
            <Link href={"https://github.com/Al-Bajber"}>Al-Bajber</Link>
            <Link href={"https://www.linkedin.com/in/faraj-salim-784395373/"}>
              Faraj Salim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
