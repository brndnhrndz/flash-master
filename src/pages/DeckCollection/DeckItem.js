import React from 'react';
import '../../assets/DeckItem.css'

const DeckItem = ({ deck, updateState }) => {
    const handleDeckItemClick = () => {
        updateState({
            activeDeck: deck,
            activeCard: deck.cards[0],
            activeCardFace: deck.cards[0].front,
            showDeckCollection: false,
            showCardView: true,
        });
    };

    return (
        <div
            className='collection-item'
            onClick={handleDeckItemClick}>
            {deck.deckName}
        </div>
    );
};

export default DeckItem;
