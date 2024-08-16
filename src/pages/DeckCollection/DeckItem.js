import React from 'react';
import '../../assets/DeckItem.css';

const DeckItem = ({ deck, updateState }) => {
    const handleDeckClick = () => {
        updateState({
            showDeckCollection: false,
            showCardView: true,
            activeDeck: deck,
            activeCard: deck.cards[0],
            activeCardFace: deck.cards[0].front,
            activeComponent: 3
        });
    };

    return (
        <div
            className='collection-item'
            onClick={handleDeckClick}>
            {deck.deckName}
        </div>
    );
};

export default DeckItem;
