import React from 'react'

const DeckCollection = (props) => {
    // Extract decks from database and render to screen

    const handleDeckIconClick = () => {
        props.setShowDeckCollection(false);
        props.setShowCardView(true);
    }

    const handleCreateDeck = () => {
        props.setShowDeckCollection(false);
        props.setShowDeckCreation(true);
    }

    return (
        <div id='deck-collection'>
            <h1>Deck Collection</h1>

            <button type='button'>Manage Decks</button>
            <button type='button' onClick={handleCreateDeck}>Create</button>
            <button type='button'>Sort</button>
            <button type='button'>Delete</button>

            <div id='deck-collection-icons'>
                <div id='deck-icon' onClick={handleDeckIconClick}></div>
            </div>
        </div >
    );
}

export default DeckCollection;
