import React from 'react';

import CardFace from './CardFace.js';

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

    let currCard = activeDeck.cards[0];

    return (
        <div id='card-view'>
            <h1>Card View</h1>

            <button type='button'
                onClick={handleDeckContentsClick}>Deck Contents</button>

            <button type='button'>Edit</button>

            <CardFace currCard={currCard} />

            <button type='button'>Flip</button>
            <button type='button'>Previous</button>
            <button type='button'>Next</button>

            <button type='button' onClick={handleReturnClick}>Return</button>
        </div >
    );
};

export default CardView;
