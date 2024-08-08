import React from 'react';

const DeckItem = ({ deck, updateState }) => {
    const handleDeckClick = () => {
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
            onClick={handleDeckClick}>
            {deck.deckName}
        </div>
    );
};

export default DeckItem;
