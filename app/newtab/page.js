import { FcWikipedia } from "react-icons/fc";
import Typwriter from "../ui/typwriter";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Tab() {
  return (
    <div className="w-sm h-70 flex flex-col justify-center items-center">
      <Typwriter
        className={`text-2xl font-extrabold`}
        speed={75}
        text="WWelcome to Shoofly"
      />
      <div>For security reasons, some links might not work.</div>
      <div className="flex items-center w-30 justify-evenly h-12">
        <Link href="">
          <LinkIcon className="h-8 rounded-lg bg-white/12 w-8 p-1.5" />
        </Link>
        <Link href="">
          <FcWikipedia className="h-8 rounded-lg bg-white/12 w-8 p-1.5" />
        </Link>
        <Link href="">
          <LinkIcon className="h-8 rounded-lg bg-white/12 w-8 p-1.5" />
        </Link>
      </div>
    </div>
  );
}
