import { Phone } from "lucide-react";
import Header from "./header";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { dosis } from "./fonts";
import { CircleUser } from "lucide-react";

export default function Contact({className, onClose}) {
  return(
    <div className={`bg-white/20 backdrop-blur-lg rounded-lg ${className}`}>
      <Header onClose={onClose}/>
      <div className="h-38 text-white flex">
        <div className="h-9/10 aspect-square flex flex-col justify-center items-center border rounded-full">
          <CircleUser className="h-12 w-12" />
          <div className={`${dosis.className} leading-3 pt-2 w-full flex flex-col items-center`}>
            <div className="font-bold">Faraj S. Ahmed</div>
            <div className="font-semibold text-xs italic mt-1">Software Engineer</div>
          </div>
        </div>
        <div className="h-[90%] w-3/5 p-2 flex flex-col justify-evenly text-xs card-links">
          <div>
            <Phone className="h-4 w-4 text-amber-300" />
            <Link href={""}>+254113199693</Link>
          </div>
          <div>
            <Mail className="h-4 w-4 text-amber-300" />
            <Link href={""}>ajrafSalim@gmail.com</Link>
          </div>
          <div>
            <FaGithub className="h-4 w-4 text-amber-300" />
            <Link href={""}>Al-Bajber</Link>
          </div>
          <div>
            <FaLinkedin className="h-4 w-4 text-amber-300" />
            <Link href={""}>Faraj Salim</Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
