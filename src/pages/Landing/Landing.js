import React from 'react';

const Landing = ({ updateState }) => {
    const handleCreateDeck = () => {
        updateState({
            showLanding: false,
            showDeckCreation: true
        });
    };

    const handleShowDecks = () => {
        updateState({
            showLanding: false,
            showDeckCollection: true
        });
    };

    return (
        <div id='landing'>
            <h1>Flash Master</h1>
            <button type='button' name='create-deck-btn'
                onClick={handleCreateDeck}>
                Create Deck
            </button>
            <button type='button' name='show-decks-btn'
                onClick={handleShowDecks}>
                Show Decks
            </button>
        </div>
    );
};

export default Landing;
