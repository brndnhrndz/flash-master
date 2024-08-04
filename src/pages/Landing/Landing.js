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
        <div className='container'>
            <div id='landing'>
                <h1 className='title'>Flash Master</h1>

                <div id='landing-nav-container'>
                    <button
                        type='button'
                        name='create-deck-btn'
                        className='btn'
                        onClick={handleCreateDeckClick}>
                        Create Deck
                    </button>
                    <button
                        type='button'
                        name='show-decks-btn'
                        className='btn'
                        onClick={handleShowDecksClick}>
                        Show Decks
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Landing;
