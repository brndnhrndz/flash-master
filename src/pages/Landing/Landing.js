import React from 'react';
import '../../assets/Landing.css'

const Landing = ({ updateState }) => {
    const handleCreateDeckClick = () => {
        updateState({
            showLanding: false,
            showDeckCreation: true
        });
    };

    const handleShowDecksClick = () => {
        updateState({
            showLanding: false,
            showDeckCollection: true
        });
    };

    return (
        <div id='landing'>
            <h1>Flash Master</h1>

            <button type='button' name='create-deck-btn'
                onClick={handleCreateDeckClick}>
                Create Deck
            </button>
            <button type='button' name='show-decks-btn'
                onClick={handleShowDecksClick}>
                Show Decks
            </button>
        </div>
    );
};

export default Landing;
