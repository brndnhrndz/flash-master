import React from 'react';

import CardFace from './CardFace.js';

const CardView = ({ state, updateState }) => {
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

    const handleFlipClick = () => {
        if (state.activeFaceIsFront) {
            updateState({
                activeCardFace: state.activeCard.back,
                activeFaceIsFront: false
            });
        } else if (!state.activeFaceIsFront) {
            updateState({
                activeCardFace: state.activeCard.front,
                activeFaceIsFront: true
            });
        }
    };

    const handlePreviousClick = () => {
        let activeIndex = state.activeCard.index;
        let deckLength = state.activeDeck.cards.length;
        let activeCards = state.activeDeck.cards;

        if (activeIndex > 0) {
            updateState({
                activeCard: activeCards[activeIndex - 1],
                activeCardFace: activeCards[activeIndex - 1].front
            });
        }
    };

    const handleNextClick = () => {
        let activeIndex = state.activeCard.index;
        let deckLength = state.activeDeck.cards.length;
        let activeCards = state.activeDeck.cards;

        if (activeIndex < deckLength - 1) {
            updateState({
                activeCard: activeCards[activeIndex + 1],
                activeCardFace: activeCards[activeIndex + 1].front
            });
        }
    };

    return (
        <div id='card-view'>
            <h1>Card View</h1>

            <button type='button'
                onClick={handleDeckContentsClick}>Deck Contents</button>

            <button type='button'>Edit</button>

            <CardFace state={state} />

            <button type='button' onClick={handleFlipClick}>Flip</button>
            <button type='button'
                onClick={handlePreviousClick}>Previous</button>
            <button type='button' onClick={handleNextClick}>Next</button>

            <button type='button' onClick={handleReturnClick}>Return</button>
        </div >
    );
};

export default CardView;
