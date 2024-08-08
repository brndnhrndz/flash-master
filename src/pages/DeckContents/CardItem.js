import React from 'react';
import '../../assets/CardItem.css'

const CardItem = ({ card, updateState }) => {
    const handleCardItemClick = () => {
        updateState({
            activeCard: card,
            activeCardFace: card.front,
            showCardContents: false,
            showCardView: true
        });
    };

    return (
        <div
            className='collection-item'
            onClick={handleCardItemClick}>
            {card.front}
        </div>
    );
};

export default CardItem;
