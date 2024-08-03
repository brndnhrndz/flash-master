import React, { useState } from 'react';
import '../../assets/DeckCreation.css'

const DeckCreation = ({ updateState }) => {
    const [deckName, setDeckName] = useState('');
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');
    const [cards, setCards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleDeckNameChange = (e) => {
        setDeckName(e.target.value);
    };

    const handleFrontTextChange = (e) => {
        setFrontText(e.target.value);
    };

    const handleBackTextChange = (e) => {
        setBackText(e.target.value);
    };

    const handlePrevCardClick = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
    };

    const handleNextCardClick = () => {
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        }
    };

    const handleSaveCardClick = () => {
        const newCard = {
            front: frontText,
            back: backText
        };

        setCards([...cards, newCard]);

        setFrontText('');
        setBackText('');
    };

    const handleRemoveCardClick = () => {
        const updatedCards = cards.filter((el, index) => {
            return index !== currentCardIndex;
        });

        setCards(updatedCards);

        if (currentCardIndex >= updatedCards.length) {
            setCurrentCardIndex(updatedCards.length - 1);
        }
    };

    const handleFinishClick = () => {
        updateState({
            showDeckCreation: false,
            showDeckCollection: true
        });
    };

    return (
        <div id='deck-creation-form'>
            <h1>Create a Deck</h1>

            <form>
                <label htmlFor='deck-name-input'>Deck Name:</label>
                <input type='text' id='deck-name-input' name='deck-name'
                    placeholder='Enter a deck name:' autoComplete='off'
                    value={deckName} onChange={handleDeckNameChange} />

                <div id='edit-card-faces'>
                    <div id='front-face'></div>
                    <div id='back-face'></div>
                </div>

                <label htmlFor='front-text-input'>Front:</label>
                <input type='text' id='front-text-input' name='front-text'
                    autoComplete='off' value={frontText}
                    onChange={handleFrontTextChange} />

                <label htmlFor='back-text-input'>Back:</label>
                <input type='text' id='back-text-input' name='back-text'
                    autoComplete='off' value={backText}
                    onChange={handleBackTextChange} />

                <button type='button'
                    onClick={handlePrevCardClick}>Previous</button>
                <button type='button' onClick={handleNextCardClick}>Next</button>
                <button type='button'
                    onClick={handleSaveCardClick}>Save Card</button>
                <button type='button'
                    onClick={handleRemoveCardClick}>Remove Card</button>
                <button type='button' onClick={handleFinishClick}>Finish</button>
            </form>
        </div>
    );
};


export default DeckCreation;
