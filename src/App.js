import React, { useState } from 'react';

import Landing from './pages/Landing/Landing.js';
import DeckCreation from './pages/DeckCreation/DeckCreation.js';
import DeckCollection from './pages/DeckCollection/DeckCollection.js';
import CardView from './pages/CardView/CardView.js';
import DeckContents from './pages/DeckContents/DeckContents.js';

const App = () => {
    const [state, setState] = useState({
        showLanding: true,
        showDeckCreation: false,
        showDeckCollection: false,
        showCardView: false,
        showDeckContents: false,
        activeDeck: {},
        decks: [
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
        ]
    });

    const updateState = (newState) => {
        setState((currState) => {
            return {
                ...currState,
                ...newState
            };
        });
    };

    if (state.showLanding) {
        return <Landing updateState={updateState} />;
    } else if (state.showDeckCreation) {
        return <DeckCreation updateState={updateState} />;
    } else if (state.showDeckCollection) {
        return <DeckCollection decks={state.decks} updateState={updateState} />;
    } else if (state.showCardView) {
        return <CardView activeDeck={state.activeDeck} updateState={updateState} />;
    } else if (state.showDeckContents) {
        return <DeckContents updateState={updateState} />;
    }
};

export default App;
