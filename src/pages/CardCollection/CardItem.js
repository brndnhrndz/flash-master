import React from 'react';

const CardItem = ({ card, updateState }) => {
    const handleCardClick = () => {
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
            onClick={handleCardClick}>
            {card.front}
        </div>
    );
};

export default CardItem;
