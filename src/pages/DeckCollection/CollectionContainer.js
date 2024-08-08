import React from 'react';
import DeckItem from './DeckItem.js';

const CollectionContainer = ({ decks, updateState }) => {
    return (
        <div className='collection-grid'>
            {
                decks.map((deck, index) => (
                    <DeckItem
                        deck={deck}
                        updateState={updateState} />
                ))
            }
        </div>
    );
};

export default CollectionContainer;
