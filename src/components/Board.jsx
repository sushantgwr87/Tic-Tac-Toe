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
          <MarkType name='cross' width='20px' />
          <span>Turn</span>
        </div>
        <div className="board_reset_btn">
          <MarkType name='refresh' width='40px' />
        </div>
      </div>
      <div className="board_slot"></div>
      <div className="board_footer">
        <div className="your_score"></div>
        <div className="draw_score"></div>
        <div className="opponent_score"></div>
      </div>
    </div>
  )
}

export default Board;