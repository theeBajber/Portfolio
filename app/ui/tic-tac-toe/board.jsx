import Square from "./square";

export default function Board({ squares, xIsNext, onPlay, winningLine }) {
  function handleClick(i) {
    if (!xIsNext) return;
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <div className="grid grid-cols-3 gap-2.5 w-[170px] h-23/50">
      {squares.map((sq, i) => (
        <Square
          key={i}
          value={sq}
          onSquareClick={() => handleClick(i)}
          isWinning={winningLine?.includes(i)}
        />
      ))}
    </div>
  );
}
