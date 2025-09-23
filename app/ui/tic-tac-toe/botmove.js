import calculateWinner from "./calculateWinner";

export function botMove(currentSquares) {
  const emptySquares = currentSquares
    .map((val, idx) => (!val ? idx : null))
    .filter((v) => v !== null);
  for (let idx of emptySquares) {
    const test = currentSquares.slice();
    test[idx] = "O";
    if (calculateWinner(test)?.Player == "O") {
      return test;
    }
  }
  for (let idx of emptySquares) {
    const test = currentSquares.slice();
    test[idx] = "X";
    if (calculateWinner(test)?.Player == "X") {
      const block = currentSquares.slice();
      block[idx] = "O";
      return block;
    }
  }
  if (!currentSquares[4]) {
    const test = currentSquares.slice();
    test[4] = "O";
    return test;
  }
  const corners = [0, 2, 6, 8];
  const availablecorners = corners.filter((i) => currentSquares[i] == null);
  if (availablecorners.length > 0) {
    const idx =
      availablecorners[Math.floor(Math.random() * availablecorners.length)];
    const test = currentSquares.slice();
    test[idx] = "O";
    return test;
  }
  const idx = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  const test = currentSquares.slice();
  test[idx] = "O";
  return test;
}
