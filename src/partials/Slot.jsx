import { useState } from 'react';
import MarkType from '../components/MarkType';

const Slot = ({ keyIndex, turnMark, changeMark }) => {

    const [turnValue, setTurnValue] = useState("");
    
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setTurnValue(turnMark);
        setDisable(true);
        changeMark();
    }

    return (
        <button className="board_slot" key={keyIndex} onClick={handleClick} disabled={disable}>
            <MarkType name={turnValue} width='60%' />
        </button>
    )
}

export default Slot;