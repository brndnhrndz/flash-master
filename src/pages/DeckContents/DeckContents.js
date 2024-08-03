import React from 'react';

const DeckContents = ({ updateState }) => {
    const handleExitDeckContents = () => {
        updateState({
            showDeckContents: false,
            showCardView: true
        });
    };

    return (
        <div id='deck-contents'>
            <h1>Deck Contents</h1>

            <button type='button'
                onClick={handleExitDeckContents}>Exit Deck Contents</button>

            <button type='button'>Manage Cards</button>
            <button type='button'>Add Card</button>
            <button type='button'>Sort</button>
            <button type='button'>Delete</button>

            <div id='deck-contents-icons'>
                <div id='card-icon'></div>
            </div>
        </div>
    );
};

export default DeckContents;
