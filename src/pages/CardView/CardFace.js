import React from 'react';
import '../../assets/CardFace.css'

const CardFace = ({ state }) => {
    return (
        <div className='card-face'>
            {state.activeCardFace}
        </div >
    );
};

export default CardFace;
