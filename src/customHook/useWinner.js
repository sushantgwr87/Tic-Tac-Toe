export default function useWinner(squares, mark, slotclick) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  var gameFlag = false;

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      gameFlag = true;
      if (squares[a] === mark) {
        return {
          isWon: true,
          isLoss: false,
          isDraw: false,
          winner: squares[a],
          line: lines[i]
        }
      }
      else {
        return {
          isLoss: true,
          isWon: false,
          isDraw: false,
          winner: squares[a],
          line: lines[i]
        }
      }
    }
  }

  if (slotclick === 9 && !gameFlag) {
    return {
      isWon: false,
      isLoss: false,
      isDraw: true
    }
  }

  return {};
}