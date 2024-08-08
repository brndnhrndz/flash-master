import React from 'react';
import '../../assets/CardFace.css'

const CardFace = ({ state }) => {
    return (
        <div id='card-face'>
            <p id='card-face-text'>
                {state.activeCardFace}
            </p>
        </div >
    );
};

export default CardFace;
