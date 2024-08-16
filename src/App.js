import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing/Landing.js';
import DeckCreation from './pages/DeckCreation/DeckCreation.js';
import DeckCollection from './pages/DeckCollection/DeckCollection.js';
import CardView from './pages/CardView/CardView.js';
import CardCollection from './pages/CardCollection/CardCollection.js';

const App = () => {
    const [state, setState] = useState({
        showLanding: true,              // activeComponent: 0
        showDeckCreation: false,        // activeComponent: 1
        showDeckCollection: false,      // activeComponent: 2
        showCardView: false,            // activeComponent: 3
        showCardCollection: false,      // activeComponent: 4
        activeComponent: 0,
        activeDeck: {},
        activeCard: {},
        activeCardFace: '',
        activeFaceIsFront: true,
        decks: []
    });

    useEffect(() => {
        fetch('/decks.json')
            .then(response => response.json())
            .then(data => {
                setState(currState => ({
                    ...currState,
                    decks: data
                }));
            })
            .catch(error => console.error('Error fetching decks:', error));
    }, []);

    const updateState = (newState) => {
        setState((currState) => {
            return {
                ...currState,
                ...newState
            };
        });
    };

    if (state.showLanding) {
        return <Landing
            state={state}
            updateState={updateState} />;
    } else if (state.showDeckCreation) {
        return <DeckCreation
            state={state}
            updateState={updateState} />;
    } else if (state.showDeckCollection) {
        return <DeckCollection
            state={state}
            decks={state.decks}
            updateState={updateState} />;
    } else if (state.showCardView) {
        return <CardView
            state={state}
            updateState={updateState} />;
    } else if (state.showCardCollection) {
        return <CardCollection
            deck={state.activeDeck}
            updateState={updateState} />;
    }
};

export default App;
