import { FcWikipedia } from "react-icons/fc";
import Typwriter from "../ui/typwriter";
import { WebcamIcon } from "lucide-react";
import { Link } from "lucide-react";

export default function Tab() {
  return (
    <div className="w-sm h-70 flex flex-col justify-center items-center">
      <Typwriter
        className={`text-2xl font-extrabold`}
        speed={75}
        text="Weelcome to my browser!"
      />
      <div>For security reasons, some links might not work.</div>
      <div className="flex items-center">
        <div>
          <FcWikipedia className="h-8 w-auto " />
        </div>
        <div>
          <Link className="h-8 rounded-full bg-white/12 w-8 p-1" />
        </div>
        <div>
          <Link className="h-8" />
        </div>
      </div>
    </div>
  );
}
