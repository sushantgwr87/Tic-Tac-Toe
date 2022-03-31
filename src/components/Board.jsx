import { useState, useEffect } from 'react';
import MarkType from './MarkType';
import Slot from '../partials/Slot';
import useWinner from '../customHook/useWinner';
import Modal from './Modal';
import Score from './Score';
import { Link } from 'react-router-dom';

const Board = ({ mark, mode }) => {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turnValue, setTurnValue] = useState("cross");
  const [disable, setDisable] = useState(false);

  const [clearBoard, setClearBoard] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [restart, setRestart] = useState(false);

  const handleClick = (i) => {
    let square = [...squares]
    square[i] = turnValue;
    setSquares(square);
    setClearBoard(false)
    setTurnValue(turnValue === "cross" ? "circle" : "cross");
  }

  const handleModal = () => {
    setModalShow(true);
    setRestart(true);
  }

  const handleModalClose = () => {
    setSquares(Array(9).fill(null));
    setTurnValue("cross");
    setClearBoard(true)
    setModalShow(false);
    setDisable(false);
  }

  var slotCheck = squares.filter(v => v !== null).length;

  const winnerState = useWinner(squares, mark, slotCheck);

  useEffect(() => {
    if (winnerState.isWon || winnerState.isLoss || winnerState.isDraw) {
      setRestart(false);
      setModalShow(true);
      setDisable(true);
      return;
    }
  }, [slotCheck])

  return (
    <div className="board">
      <div className="board_mark_turn">
        <Link to="/" onClick={() => localStorage.clear()}>
          <MarkType name='cross' width='30%' />
          <MarkType name='circle' width='30%' />
        </Link>
      </div>
      <div className="board_turn_btn">
        <MarkType name={turnValue} fill='#dad8d8' width='20px' />
        <span>Turn</span>
      </div>
      <div>
        <button className="board_reset_btn" onClick={handleModal}><MarkType name='refresh' fill='#192A32' width='30px' /></button>
      </div>
      <div className="board_slot_container">
        {squares.map((e, index) =>
          <Slot key={index} keyIndex={index} turnMark={turnValue} changeMark={handleClick} isDisabled={disable} reset={clearBoard} winState={winnerState} />
        )}
      </div>
      <Score mark={mark} mode={mode} gameStats={winnerState} slotClicked={slotCheck} />
      <Modal onClose={handleModalClose} show={modalShow} status={winnerState} restart={restart} />
    </div>
  )
}

export default Board;