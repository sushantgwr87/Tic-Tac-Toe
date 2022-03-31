import { useState,useEffect } from 'react';
import MarkType from '../components/MarkType';

const Slot = ({ keyIndex, turnMark, changeMark, reset, isDisabled, winState }) => {

    const [turnValue, setTurnValue] = useState("");
    const [disable, setDisable] = useState(false);

    const { winner, line } = winState;

    const isWon = winner && line.includes(keyIndex);

    const handleClick = () => {
        setTurnValue(turnMark);
        setDisable(true);
        changeMark(keyIndex);
    }

    useEffect(()=> {
        if(reset)
        {
            setTurnValue("")
            setDisable(false);
        }
    },[reset])

    return (
        <>
            <button className={`board_slot ${isWon ? (winner === "cross" ? "win___cross" : "win___circle") : "default"}`} key={keyIndex} onClick={handleClick} disabled={disable || isDisabled}>
                <MarkType name={turnValue} fill={isWon ? "#192A32" : ""} width='60%' />
            </button>
        </>
    )
}

export default Slot;