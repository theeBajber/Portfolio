"use client";

export default function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`h-full aspect-square rounded-xl border text-3xl font-semibold cursor-pointer hover:bg-slate-800 hover:border-slate-700 hover:shadow-blue-500/50 shadow-[0_0_10px_hsl] transition-colors duration-150 ease-in ${value === "X" ? "text-pink-400" : "text-blue-500"} ${isWinning ? "bg-green-500/10 border-green-400 shadow-[#22c55e] animate-pulse hover" : "bg-slate-900 border-slate-800"}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
