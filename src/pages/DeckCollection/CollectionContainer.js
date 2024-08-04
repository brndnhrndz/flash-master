import React from 'react';
import DeckItem from './DeckItem.js';
import '../../assets/CollectionContainer.css'

const CollectionContainer = ({ decks, updateState }) => {
    return (
        <div className='grid-container'>
            <div id='collection-contaniner'>
                {
                    decks.map((deck, index) => (
                        <DeckItem
                            deck={deck}
                            updateState={updateState} />
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionContainer;
