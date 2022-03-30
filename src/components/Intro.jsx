import { useState } from 'react';
import MarkType from './MarkType';
import { Link } from 'react-router-dom';

const Intro = ({ setMarkType, setModeType }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = (e) => {
    setCheck(!check);
    setMarkType(e.target.value);
  }

  const handleMode = (e) => {
    setModeType(e.target.id);
  }

  return (
    <div className="intro">
      <div className='intro_logo'>
        <MarkType name='cross' width='100px' />
        <MarkType name='circle' width='100px' />
      </div>
      <div className="turn_select">
        <h3>Pick player 1's mark</h3>
        <div className="turn_btn">
          <label className="turn_label">
            <input type="radio" defaultChecked value="cross" name="radio" onChange={handleCheck} />
            <div className="turn_mark">
              <MarkType name='cross' width='50px' fill={!check ? "#192A32" : "#dad8d8"} />
            </div>
          </label>
          <label className="turn_label">
            <input type="radio" value="circle" name="radio" onChange={handleCheck} />
            <div className="turn_mark">
              <MarkType name='circle' width='50px' fill={check ? "#192A32" : "#dad8d8"} />
            </div>
          </label>
        </div>
        <p>Remember: X goes first</p>
      </div>
      <div className="game_type">
        <Link to="/board">
          <button id="cpu" onClick={handleMode} className='cpu_btn'>New Game (VS CPU)</button>
        </Link>
        <Link to="/board">
          <button id="player" onClick={handleMode} className='player_btn'>New Game (VS Player)</button>
        </Link>
      </div>
    </div>
  )
}

export default Intro