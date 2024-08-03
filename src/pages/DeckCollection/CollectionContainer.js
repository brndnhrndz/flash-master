import React, { useState } from 'react';

import DeckItem from './DeckItem.js';

const CollectionContainer = () => {
    const [decks, setDecks] = useState([
        // verbs
        {
            deckName: 'verbs',
            cards: [
                {
                    index: 0,
                    front: 'llegar',
                    back: 'to arrive, to come'
                },
                {
                    index: 1,
                    front: 'subir',
                    back: 'to go up'
                },
                {
                    index: 2,
                    front: 'poner',
                    back: 'to put'
                }
            ]
        },
        // nouns
        {
            deckName: 'nouns',
            cards: [
                {
                    index: 0,
                    front: 'el espejo',
                    back: 'the mirror'
                },
                {
                    index: 1,
                    front: 'el hombre',
                    back: 'the man'
                }
            ]
        }
    ]);
    
    return (
        <div id='collection-contaniner'>
            {
                // replace with DeckItem component
                decks.map((deck, index) => (
                    <DeckItem deck={deck} />
                ))
            }
        </div>
    );
};

export default CollectionContainer;
