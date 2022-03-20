import { useState, useEffect } from 'react';
import MarkType from './MarkType';
import Slot from '../partials/Slot';
import useWinner from '../customHook/useWinner';
import Modal from './Modal';
import Score from './Score';

const Board = ({ mark, mode }) => {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turnValue, setTurnValue] = useState("cross");
  const [disable, setDisable] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const handleClick = (i) => {
    let square = [...squares]
    square[i] = turnValue;
    setSquares(square);
    setTurnValue(turnValue === "cross" ? "circle" : "cross");
  }

  const handleModal = () => {
		setModalShow(true);
	}

  console.log(squares);
  
  var slotCheck = squares.filter(v => v!==null).length;

  const winnerState = useWinner(squares, mark);
  console.log(winnerState)

  useEffect(() => {
    if (winnerState.isWon || winnerState.isLoss) {
      setDisable(true);
      return;
    }
  }, [winnerState])

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
        <button onClick={handleModal}><MarkType name='refresh' fill='#192A32' width='30px' /></button>
      </div>
      <div className="board_slot_container">
        {squares.map((e, index) =>
          <Slot key={index} keyIndex={index} turnMark={turnValue} changeMark={handleClick} isDisabled={disable} winState={winnerState} />
        )}
      </div>
      <Score mark={mark} mode={mode} gameStats={winnerState} slotClicked={slotCheck} />
      <Modal onClose={() => setModalShow(false)} show={modalShow} />
    </div>
  )
}

export default Board;