import { useState } from 'react';
import MarkType from './MarkType';
import Slot from '../partials/Slot';
import useWinner from '../customHook/useWinner';

const Board = ({ mark, mode }) => {

  const isCross = mark === "cross";

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turnValue, setTurnValue] = useState("cross");

  const [scoreData, setScoreData] = useState({
    win: 0,
    draw: 0,
    loss: 0 //Opponent's score
  })

  const { win, draw, loss } = scoreData;

  const handleClick = (i) => {
    let square = [...squares]
    square[i] = turnValue;
    setSquares(square);
    setTurnValue(turnValue === "cross" ? "circle" : "cross");
  }

  const winnerState = useWinner(squares);

  console.log(winnerState)

  // if (winnerState.line) {
  //   if (winnerState.winner === mark)
  //     setScoreData({ scoreData, win: win + 1 });
  //   else
  //     setScoreData({ scoreData, loss: loss + 1 });
  // }

  return (
    <div className="board">
      <div className="board_mark_turn">
        <MarkType name='cross' width='30%' />
        <MarkType name='circle' width='30%' />
      </div>
      <div className="board_turn_btn">
        <MarkType name={turnValue} fill='#dad8d8' width='20px' />
        <span>Turn</span>
      </div>
      <div className="board_reset_btn">
        <button><MarkType name='refresh' fill='#192A32' width='30px' /></button>
      </div>
      <div className="board_slot_container">
        {squares.map((e, index) =>
          <Slot key={index} keyIndex={index} turnMark={turnValue} changeMark={handleClick} winState={winnerState} />
        )}
      </div>
      <div className="board_score___your">
        <MarkType name={isCross ? "cross" : "circle"} width='20px' height='20px' fill='#192A32' className='board_score___icon' />
        <span>(You)</span>
        <p>{win}</p>
      </div>
      <div className="board_score___draw">
        <span>Ties</span>
        <p>{draw}</p>
      </div>
      <div className="board_score___opponent">
        <MarkType name={isCross ? "circle" : "cross"} width='20px' height='20px' fill='#192A32' className='board_score___icon' />
        <span>(CPU)</span>
        <p>{loss}</p>
      </div>
    </div>
  )
}

export default Board;