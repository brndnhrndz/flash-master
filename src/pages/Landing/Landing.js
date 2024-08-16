import React from 'react';
import Header from '../../components/Header.js';
import '../../assets/Landing.css';

const Landing = ({ state, updateState }) => {
    const handleCreateDeckClick = () => {
        updateState({
            showLanding: false,
            showDeckCreation: true,
            activeComponent: 1
        });
    };

    const handleShowDecksClick = () => {
        updateState({
            showLanding: false,
            showDeckCollection: true,
            activeComponent: 2
        });
    };

    return (
        <>
            <Header
                state={state}
                updateState={updateState} />
                
            <div id='landing'>
                <div id='landing-controls'>
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
        </>


    );
};

export default Landing;
