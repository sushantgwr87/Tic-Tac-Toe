import { useState } from 'react';
import MarkType from './MarkType';
import Slot from '../partials/Slot';

const Board = ({ mark, mode }) => {

  const isCross = mark === "cross";

  const [turnValue, setTurnValue] = useState("cross");

  const handleClick = () => {
    setTurnValue(turnValue === "cross" ? "circle" : "cross");
  }

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
        {[...Array(9)].map((e, index) =>
          <Slot key={index} keyIndex={index} turnMark={turnValue} changeMark={handleClick} />
        )}
      </div>
      <div className="board_score___your">
        <MarkType name={isCross ? "cross" : "circle"} width='20px' height='20px' fill='#192A32' className='board_score___icon' />
        <span>(You)</span>
        <p>11</p>
      </div>
      <div className="board_score___draw">
        <span>Ties</span>
        <p>value</p>
      </div>
      <div className="board_score___opponent">
        <MarkType name={isCross ? "circle" : "cross"} width='20px' height='20px' fill='#192A32' className='board_score___icon' />
        <span>(CPU)</span>
        <p>value</p>
      </div>
    </div>
  )
}

export default Board;