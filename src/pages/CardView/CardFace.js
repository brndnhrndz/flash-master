import React from 'react';
import '../../assets/CardFace.css'

const CardFace = ({ handleFlipClick, state }) => {
    return (
        <div
            onClick={handleFlipClick}
            id='card-face'>
            <img />
            <p id='card-face-text'>
                {state.activeCardFace}
            </p>
        </div >

    );
};

export default CardFace;
