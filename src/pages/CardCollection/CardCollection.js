import React from 'react';
import ContentsContainer from './ContentsContainer.js';

const CardCollection = ({ deck, updateState }) => {
    const handleExitClick = () => {
        updateState({
            showCardCollection: false,
            showCardView: true
        });
    };

    return (
        <div className='alt-container'>
            <div className='collection-container'>
                <h1 className='title'>{deck.deckName}</h1>

                <div className='collection-controls'>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleExitClick}>
                        Exit
                    </button>
                    <button
                        type='button'
                        className='btn'>
                        Manage
                    </button>
                </div>

                <ContentsContainer
                    deck={deck}
                    updateState={updateState} />
            </div>
        </div>
    );
};

export default CardCollection;
