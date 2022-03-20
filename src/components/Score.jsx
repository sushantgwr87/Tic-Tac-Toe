import { useState, useEffect } from 'react';
import MarkType from './MarkType';

const Score = ({ mark, gameStats, slotClicked, mode }) => {

    const isCross = mark === "cross";

    const [scoreData, setScoreData] = useState({
        win: 0,
        draw: 0,
        loss: 0 //Opponent's score
    })

    console.log(slotClicked);

    const { win, draw, loss } = scoreData;

    useEffect(() => {
        if (gameStats) {
            if (gameStats.isWon)
                setScoreData({ ...scoreData, win: win + 1 });
            else if (gameStats.isLoss)
                setScoreData({ ...scoreData, loss: loss + 1 });
            else if (slotClicked === 9)
                setScoreData({ ...scoreData, draw: draw + 1 });
        }
    }, [])

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