import React from 'react';
import Header from '../../components/Header.js';
import CardFace from './CardFace.js';
import '../../assets/CardView.css';

const CardView = ({ state, updateState }) => {
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

    console.log(state.activeDeck);

    return (
        <>
            <Header
                state={state}
                updateState={updateState} />

            <div id='card-view-container'>
                <div id='card-view'>
                    <CardFace
                        handleFlipClick={handleFlipClick}
                        state={state} />

                    <div id='card-face-controls-container'>
                        <div id='card-face-controls'>
                            <button
                                type='button'
                                className='btn'
                                onClick={handlePreviousClick}>
                                Previous
                            </button>
                            <button
                                type='button'
                                className='btn ml-btn'
                                onClick={handleNextClick}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CardView;
