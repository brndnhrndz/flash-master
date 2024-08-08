import React from 'react';
import CollectionContainer from './CollectionContainer.js';
import '../../assets/DeckCollection.css'

const DeckCollection = ({ decks, updateState }) => {
    const handleLandingClick = () => {
        updateState({
            showDeckCollection: false,
            showLanding: true
        });
    };

    return (
        <div className='alt-container'>
            <div className='collection-container'>
                <h1 className='title'>Deck Collection</h1>

                <div className='collection-controls'>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleLandingClick}>
                        Landing
                    </button>
                    <button
                        type='button'
                        className='btn'>
                        Manage
                    </button>
                </div>
                
                <CollectionContainer
                    decks={decks}
                    updateState={updateState} />
            </div>
        </div>
    );
};

export default DeckCollection;
