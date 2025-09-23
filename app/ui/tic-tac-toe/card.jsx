import { Trophy } from "lucide-react";
import { Users } from "lucide-react";

export default function Card({ icon = "", turn, value }) {
  return (
    <div className="border w-[30%] rounded-lg h-[95%] border-slate-700 bg-slate-800 flex flex-col justify-evenly items-center">
      <div className="flex justify-center gap-2 items-center">
        {turn == "D" ? (
          <Trophy className="text-green-500" />
        ) : (
          <span
            className={`text-2xl ${turn == "X" ? "text-pink-400" : "text-blue-500"} font-semibold`}
          >
            {turn}
          </span>
        )}
        {icon ? <div>{icon}</div> : <Users />}
      </div>
      <div
        className={`text-3xl ${turn == "X" ? "text-pink-400" : turn == "O" ? "text-blue-500" : "text-green-500"}`}
      >
        {value}
      </div>
    </div>
  );
}
