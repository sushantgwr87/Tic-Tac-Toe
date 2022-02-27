import React from 'react';
import MarkType from './MarkType';

const Board = ({ mark, mode }) => {

  return (
    <div className="board">
      <div className="board_header">
        <div className="board_mark_turn">
          <MarkType name='cross' width='50px' />
          <MarkType name='circle' width='50px' />
        </div>
        <div className="board_turn_btn">
          <MarkType name='cross' fill='#dad8d8' width='30px' />
          <span>Turn</span>
        </div>
        <div className="board_reset_btn">
          <button><MarkType name='refresh' fill='#dad8d8' width='30px' /></button>
        </div>
      </div>
      <div className="board_slot_container">
        <div className="board_slot">
          <MarkType name='cross' width='60%' />
        </div>
        <div className="board_slot">
          <MarkType name='cross' width='60%' />
        </div>
        <div className="board_slot">
          <MarkType name='cross' width='60%' />
        </div>
      </div>
      <div className="board_footer">
        <div className="board_score___your"></div>
        <div className="board_score___draw"></div>
        <div className="board_score___opponent"></div>
      </div>
    </div>
  )
}

export default Board;