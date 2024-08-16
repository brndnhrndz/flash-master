import React from 'react';
import Header from '../../components/Header.js';
import DeckItem from './DeckItem.js';
import '../../assets/DeckCollection.css';

const DeckCollection = ({ state, updateState }) => {
    return (
        <>
            <Header
                state={state}
                updateState={updateState} />

            <div className='collection-container'>
                <div className='collection-grid'>
                    {
                        state.decks.map((deck, index) => (
                            <DeckItem
                                deck={deck}
                                updateState={updateState} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default DeckCollection;
