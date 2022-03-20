import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react';
import MarkType from '../components/MarkType';

const Slot = ({ keyIndex, turnMark, changeMark, isDisabled, winState }) => {

    const [turnValue, setTurnValue] = useState("");
    const [disable, setDisable] = useState(false);

    // console.log(winState);

    const { winner, line } = winState;

    const isWon = winner && line.includes(keyIndex);

    const handleClick = () => {
        setTurnValue(turnMark);
        setDisable(true);
        changeMark(keyIndex);
    }

    // useEffect(() => {
    //     if (isWon)
    //         setDisable(true);
    // }, [])


    return (
        <>
            <button className={`board_slot ${isWon ? (winner === "cross" ? "win___cross" : "win___circle") : "default"}`} key={keyIndex} onClick={handleClick} disabled={disable || isDisabled}>
                <MarkType name={turnValue} fill={isWon ? "#192A32" : ""} width='60%' />
            </button>
            {/* <input type="hidden" id="slot" name="slot" disabled={disable} onClick={handleClick} />
            <label className={`board_slot ${isWon ? (winner === "cross" ? "win___cross" : "win___circle") : "default"}`} key={keyIndex} onClick={handleClick}>
                <MarkType name={turnValue} fill={isWon ? "#192A32" : ""} width='60%' />
            </label> */}
        </>
    )
}

export default Slot;