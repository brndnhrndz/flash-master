import React from 'react';

import DeckItem from './DeckItem.js';

const CollectionContainer = ({ decks, updateState }) => {
    return (
        <div id='collection-contaniner'>
            {
                decks.map((deck, index) => (
                    <DeckItem deck={deck} updateState={updateState} />
                ))
            }
        </div>
    );
};

export default CollectionContainer;
