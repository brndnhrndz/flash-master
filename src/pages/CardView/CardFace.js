import React from 'react';

const CardFace = ({ state }) => {
    return (
        <div className='card-face'>
            {state.activeCardFace}
        </div >
    );
};

export default CardFace;
