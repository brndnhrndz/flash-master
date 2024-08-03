import React from 'react';

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
        <div className='deck-item' onClick={handleDeckItemClick}>
            {deck.deckName}
        </div>
    );
};

export default DeckItem;
