import React from 'react';

const CardFace = ({ currCard }) => {
    return (
        <div class='card-face'>
            {currCard.front}
        </div >
    );
};

export default CardFace;
