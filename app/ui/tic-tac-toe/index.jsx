import { useEffect, useState } from "react";
import calculateWinner from "./calculateWinner";
import Board from "./board";
import Card from "./card";
import { botMove } from "./botmove";
import Header from "../header";

export default function TicTacToe({ onClose, className }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ x: 0, d: 0, o: 0 });
  const [game, setGame] = useState(1);
  const [isBot, setIsBot] = useState(true);

  const winner = calculateWinner(squares);

  function handlePlay(nextSquares) {
    if (winner) return;
    const result = calculateWinner(nextSquares);
    setSquares(nextSquares);
    if (result) {
      if (result.Player == "X") {
        setScores((s) => ({ ...s, x: s.x + 1 }));
      } else if (result.Player == "O") {
        setScores((s) => ({ ...s, o: s.o + 1 }));
      }
      return;
    }
    if (!nextSquares.includes(null)) {
      setScores((s) => ({ ...s, d: s.d + 1 }));
      return;
    }
    setXIsNext((prev) => !prev);
  }
  useEffect(() => {
    if (isBot && !xIsNext && !winner && squares.includes(null)) {
      const botSquares = botMove(squares);
      if (botSquares) {
        setTimeout(() => handlePlay(botSquares), 500);
      }
    }
  }, [xIsNext, isBot, winner, squares]);

  let status;

  if (winner) {
    status = (
      <>
        Winner:{" "}
        {winner.Player === "X" ? (
          <>
            Player <span className="text-pink-400 font-bold">X</span>
          </>
        ) : (
          <>
            Ayra <span className="text-blue-500 font-bold">O</span>
          </>
        )}{" "}
        🎉
      </>
    );
  } else if (!squares.includes(null)) {
    status = <>It&apos;s a Draw 🤝</>;
  } else {
    status = (
      <>
        {xIsNext ? "Player" : "Ayra"}{" "}
        <span
          className={`${xIsNext ? "text-pink-400" : "text-blue-500"} font-bold`}
        >
          {xIsNext ? "X" : "O"}
        </span>
        's turn
      </>
    );
  }
  return (
    <div
      className={`relative sm:w-[40vw] w-full min-w-75 h-98 bg-white/20 backdrop-blur-2xl rounded-lg ${className}`}
    >
      <Header className="absolute top-0" onClose={onClose} />
      <div className="flex flex-col justify-evenly items-center w-full h-92 relative top-6 text-white">
        <div className="w-full h-1/5 flex justify-evenly">
          <Card turn="X" value={scores.x} />
          <Card icon={`Draws`} turn="D" value={scores.d} />
          <Card turn="O" value={scores.o} />
        </div>
        <div className="w-fit border-green-500 border rounded-3xl p-2 px-4 text-xl text-slate-200 leading-4">
          {status}
        </div>
        <Board
          squares={squares}
          xIsNext={xIsNext}
          onPlay={handlePlay}
          winningLine={winner?.line}
        />
        <div className="flex gap-3">
          <button
            className="cursor-pointer w-32 p-1.5 relative before:absolute before:w-full before:h-full before:-left-full before:top-0 hover:before:left-0 before:bg-gradient-to-br before:to-white/10 before:from-transparent before:transition-all before:ease-in before:content-[''] overflow-hidden border-slate-700 bg-slate-800 rounded-lg"
            onClick={() => {
              setGame((g) => g + 1);
              setXIsNext(true);
              setSquares(Array(9).fill(null));
            }}
          >
            New Game
          </button>
          <button
            className="cursor-pointer w-32 p-1.5 hover:bg-pink-400 rounded-lg bg-red-500 transition-colors ease-in"
            onClick={() => {
              setGame(1);
              setXIsNext(true);
              setSquares(Array(9).fill(null));
              setScores({ x: 0, o: 0, d: 0 });
            }}
          >
            Reset stats
          </button>
        </div>
      </div>
    </div>
  );
}
