import React from 'react';

const CardView = ({ activeDeck, updateState }) => {
    const handleDeckContentsClick = () => {
        updateState({
            showCardView: false,
            showDeckContents: true
        });
    };

    const handleReturnClick = () => {
        updateState({
            showCardView: false,
            showDeckCollection: true
        });
    };

    return (
        <div id='card-view'>
            <h1>Card View</h1>

            <button type='button'
                onClick={handleDeckContentsClick}>Deck Contents</button>

            <button type='button'>Edit</button>

            <div className='card-face'>
                {activeDeck.cards[0].front}
            </div>

            <button type='button'>Flip</button>
            <button type='button'>Previous</button>
            <button type='button'>Next</button>

            <button type='button' onClick={handleReturnClick}>Return</button>
        </div >
    );
};

export default CardView;
