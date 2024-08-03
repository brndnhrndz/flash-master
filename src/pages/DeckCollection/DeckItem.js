import React from 'react';

const DeckItem = ({ deck }) => {
    return (
        <div className='deck-item'>
            {deck.deckName}
        </div>
    );
};

export default DeckItem;
