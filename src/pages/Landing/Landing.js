import React from 'react'

const Landing = (props) => {
    const handleCreateDeck = () => {
        props.setShowLanding(false);
        props.setShowDeckCreation(true);
    }

    const handleShowDecks = () => {
        props.setShowLanding(false);
        props.setShowDeckCollection(true);
    }

    return (
        <div id='landing'>
            <h1>Flash Master</h1>
            <button type='button' name='create-deck-btn'
                onClick={handleCreateDeck}>
                Create Deck
            </button>
            <button type='button' name='view-decks-btn'
                onClick={handleShowDecks}>
                View Decks
            </button>
        </div>
    );
}

export default Landing;
