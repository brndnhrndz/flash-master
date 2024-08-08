import React from 'react';
import CardFace from './CardFace.js';
import '../../assets/CardView.css'

const CardView = ({ state, updateState }) => {
    const handleCardCollectionClick = () => {
        updateState({
            showCardView: false,
            showCardCollection: true
        });
    };

    const handleReturnClick = () => {
        updateState({
            showCardView: false,
            showDeckCollection: true
        });
    };

    const handleFlipClick = () => {
        console.log(state.activeFaceIsFront);
        if (state.activeFaceIsFront) {
            updateState({
                activeCardFace: state.activeCard.back,
                activeFaceIsFront: false
            });
        } else {
            updateState({
                activeCardFace: state.activeCard.front,
                activeFaceIsFront: true
            });
        }
    };

    const handlePreviousClick = () => {
        const activeIndex = state.activeCard.index;
        const activeCards = state.activeDeck.cards;

        if (activeIndex > 0) {
            updateState({
                activeCard: activeCards[activeIndex - 1],
                activeCardFace: activeCards[activeIndex - 1].front,
                activeFaceIsFront: true
            });
        }
    };

    const handleNextClick = () => {
        const activeIndex = state.activeCard.index;
        const activeCards = state.activeDeck.cards;

        if (activeIndex < activeCards.length - 1) {
            updateState({
                activeCard: activeCards[activeIndex + 1],
                activeCardFace: activeCards[activeIndex + 1].front,
                activeFaceIsFront: true
            });
        }
    };

    return (
        <div className='container'>
            <div id='card-view'>
                <h1 className='title'>{state.activeDeck.deckName}</h1>

                <div id='card-view-controls'>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleCardCollectionClick}>
                        Cards
                    </button>
                    <button
                        type='button'
                        className='btn'>
                        Edit
                    </button>
                </div>
                
                <CardFace state={state} />

                <div id='card-face-controls'>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleReturnClick}>
                        Return
                    </button>
                    <button
                        type='button'
                        className='btn'
                        onClick={handlePreviousClick}>
                        Previous
                    </button>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleNextClick}>
                        Next
                    </button>
                    <button
                        type='button'
                        className='btn'
                        onClick={handleFlipClick}>
                        Flip
                    </button>
                </div>
            </div >
        </div>
    );
};

export default CardView;
