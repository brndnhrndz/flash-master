import React from 'react';
import CardFace from './CardFace.js';
import '../../assets/CardView.css'

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
                activeCardFace: activeCards[activeIndex - 1].front
            });
        }
    };

    const handleNextClick = () => {
        const activeIndex = state.activeCard.index;
        const deckLength = state.activeDeck.cards.length;
        const activeCards = state.activeDeck.cards;

        if (activeIndex < deckLength - 1) {
            updateState({
                activeCard: activeCards[activeIndex + 1],
                activeCardFace: activeCards[activeIndex + 1].front
            });
        }
    };

    return (
        <div className='container'>
            <div id='card-view'>
                <div id='card-view-header-container'>
                    <h1 className='title'>{state.activeDeck.deckName}</h1>
                    <div id='card-view-header-nav-container'>
                        <button
                            type='button'
                            className='card-view-header-nav-btn'
                            onClick={handleDeckContentsClick}>
                            Contents
                        </button>
                        <button
                            type='button'
                            className='card-view-header-nav-btn'>
                            Edit
                        </button>
                    </div>
                </div>

                {/* center <CardFace /> without taking into account .title */}
                <div id='card-view-face-container'>
                    <CardFace state={state} />
                </div>

                <div id='card-view-face-nav-container'>

                    <button
                        type='button'
                        className='card-view-face-nav-btn'
                        onClick={handleReturnClick}>
                        Return
                    </button>
                    <button
                        type='button'
                        className='card-view-face-nav-btn'
                        onClick={handlePreviousClick}>
                        Previous
                    </button>
                    <button
                        type='button'
                        className='card-view-face-nav-btn'
                        onClick={handleNextClick}>
                        Next
                    </button>
                    <button
                        type='button'
                        className='card-view-face-nav-btn'
                        onClick={handleFlipClick}>
                        Flip
                    </button>
                </div>
            </div >
        </div>
    );
};

export default CardView;
