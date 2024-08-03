import React from 'react';

const DeckItem = ({ deck, updateState }) => {
    const handleDeckItemClick = () => {
        updateState({
            activeDeck: deck,
            showDeckCollection: false,
            showCardView: true,
        });
    };

    return (
        <div className='deck-item' onClick={handleDeckItemClick}>
            {deck.deckName}
        </div>
    );
};

export default DeckItem;
