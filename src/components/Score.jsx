import { useEffect } from 'react';
import useSessionStorage from '../customHook/useSessionStorage';
import MarkType from './MarkType';

const Score = ({ mark, gameStats, slotClicked, mode }) => {

    const isCross = mark === "cross";

    const [win, setWin] = useSessionStorage("win", 0)
    const [loss, setLoss] = useSessionStorage("loss", 0)
    const [draw, setDraw] = useSessionStorage("draw", 0)

    useEffect(() => {
        if (gameStats.isWon)
            setWin(win + 1);
        else if (gameStats.isLoss)
            setLoss(loss + 1);
        else if (gameStats.isDraw)
            setDraw(draw + 1);
    }, [slotClicked])

    return (
        <>
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
                <span>{mode}</span>
                <p>{loss}</p>
            </div>
        </>
    )
}

export default Score