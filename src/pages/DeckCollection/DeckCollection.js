import React from 'react';

import CollectionContainer from './CollectionContainer.js';

const DeckCollection = ({ decks, updateState }) => {
    const handleLandingClick = () => {
        updateState({
            showDeckCollection: false,
            showLanding: true
        });
    };

    return (
        <div id='deck-collection'>
            <h1>Deck Collection</h1>

            <button type='button'>Manage Decks</button>
            <button type='button'>Create</button>
            <button type='button'>Sort</button>
            <button type='button'>Delete</button>

            <button type='button' onClick={handleLandingClick}>Landing</button>

            <CollectionContainer decks={decks} updateState={updateState} />
        </div >
    );
};

export default DeckCollection;
