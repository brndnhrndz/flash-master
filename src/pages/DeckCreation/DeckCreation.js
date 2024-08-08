import React, { useState } from 'react';

const DeckCreation = ({ updateState }) => {
    const [creationState, setCreationState] = useState({
        deckName: '',
        frontText: '',
        backText: '',
        cards: [],
        currentCardIndex: 0
    });

    const updateCreationState = (newState) => {
        setCreationState((currState) => {
            return {
                ...currState,
                ...newState
            };
        });
    };

    const handleDeckNameChange = (e) => {
        updateCreationState({
            deckName: e.target.value
        });
    };

    const handleFrontTextChange = (e) => {
        updateCreationState({
            frontText: e.target.value
        });
    };

    const handleBackTextChange = (e) => {
        updateCreationState({
            backText: e.target.value
        });
    };

    const handlePreviousClick = () => {
        if (creationState.currentCardIndex > 0) {
            updateCreationState({
                currentCardIndex: creationState.currentCardIndex - 1
            });
        }
    };

    const handleNextClick = () => {
        if (creationState.currentCardIndex < creationState.cards.length - 1) {
            updateCreationState({
                currentCardIndex: creationState.currentCardIndex + 1
            });
        }
    };

    const handleSaveClick = () => {
        const newCard = {
            index: creationState.currentCardIndex,
            front: creationState.frontText,
            back: creationState.backText
        };

        updateCreationState({
            frontText: '',
            backText: '',
            cards: [...creationState.cards, newCard]
        });
    };

    const handleRemoveClick = () => {
        const updatedCards = creationState.cards.filter((el, index) => {
            return index !== creationState.currentCardIndex;
        });

        updateCreationState({
            cards: updatedCards
        });

        if (creationState.currentCardIndex >= updatedCards.length) {
            updateCreationState({
                currentCardIndex: updatedCards.length - 1
            });
        }
    };

    const handleFinishClick = () => {
        updateState({
            showDeckCreation: false,
            showDeckCollection: true
        });
    };

    return (
        <div className='alt-container'>
            <div id='deck-creation-form'>
                <h1 className='title'>Create a Deck</h1>

                <form>
                    <div>
                        <label htmlFor='deck-name-input'>Deck Name:</label>
                        <input
                            type='text'
                            id='deck-name-input'
                            name='deck-name'
                            placeholder='Enter a deck name:'
                            autoComplete='off'
                            value={creationState.deckName}
                            onChange={handleDeckNameChange} />
                    </div>

                    <div>
                        <div>
                            <label htmlFor='front-text-input'>Front:</label>
                            <input
                                type='text'
                                id='front-text-input'
                                name='front-text'
                                autoComplete='off'
                                value={creationState.frontText}
                                onChange={handleFrontTextChange} />
                        </div>

                        <div>
                            <label htmlFor='back-text-input'>Back:</label>
                            <input
                                type='text'
                                id='back-text-input'
                                name='back-text'
                                autoComplete='off'
                                value={creationState.backText}
                                onChange={handleBackTextChange} />
                        </div>
                    </div>

                    <button
                        type='button'
                        onClick={handlePreviousClick}>
                        Previous
                    </button>
                    <button
                        type='button'
                        onClick={handleNextClick}>
                        Next
                    </button>
                    <button
                        type='button'
                        onClick={handleSaveClick}>
                        Save Card
                    </button>
                    <button
                        type='button'
                        onClick={handleRemoveClick}>
                        Remove Card
                    </button>
                    <button
                        type='button'
                        onClick={handleFinishClick}>
                        Finish

                    </button>
                </form>
            </div>
        </div>
    );
};


export default DeckCreation;
