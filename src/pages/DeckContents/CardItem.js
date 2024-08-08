import React from 'react';
import '../../assets/CardItem.css'

const CardItem = ({ card, updateState }) => {
    return (
        <div className='card-item'>
            {card.front}
        </div>
    );
};

export default CardItem;
