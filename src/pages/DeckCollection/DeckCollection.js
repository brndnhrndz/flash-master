import React from 'react'

import CollectionContainer from './CollectionContainer.js'

const DeckCollection = (props) => {
    const handleLanding = () => {
        props.setShowDeckCollection(false);
        props.setShowLanding(true);
    }

    return (
        <div id='deck-collection'>
            <h1>Deck Collection</h1>

            <button type='button'>Manage Decks</button>
            <button type='button'>Create</button>
            <button type='button'>Sort</button>
            <button type='button'>Delete</button>

            <button type='button' onClick={handleLanding}>Landing</button>

            <CollectionContainer />
        </div >
    );
}

export default DeckCollection;
