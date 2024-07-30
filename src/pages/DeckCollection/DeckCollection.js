import React from 'react'

const DeckCollection = (props) => {
    const handleDeckIconClick = () => {
        props.setShowDeckCollection(false);
        props.setShowCardView(true);
    }

    const handleCreateDeck = () => {
        props.setShowDeckCollection(false);
        props.setShowDeckCreation(true);
    }

    const handleLanding = () => {
        props.setShowDeckCollection(false);
        props.setShowLanding(true);
    }

    return (
        <div id='deck-collection'>
            <h1>Deck Collection</h1>

            <button type='button'>Manage Decks</button>
            <button type='button' onClick={handleCreateDeck}>Create</button>
            <button type='button'>Sort</button>
            <button type='button'>Delete</button>
            <button type='button' onClick={handleLanding}>Landing</button>

            <div id='deck-collection-icons'>
                <div id='deck-icon' onClick={handleDeckIconClick}></div>
            </div>
        </div >
    );
}

export default DeckCollection;
