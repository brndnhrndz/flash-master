import React from 'react';
import ContentsContainer from './ContentsContainer.js';
import '../../assets/DeckContents.css'

const DeckContents = ({ deck, updateState }) => {
    const handleExitDeckContentsClick = () => {
        updateState({
            showDeckContents: false,
            showCardView: true
        });
    };

    return (
        <div className='alt-container'>
            <div className='collection-container'>
                <h1 className='title'>Deck Contents</h1>

                <div className='collection-controls'>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleExitDeckContentsClick}>
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

export default DeckContents;
