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
        showDeckContents: false
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
        return <DeckCollection updateState={updateState} />;
    } else if (state.showCardView) {
        return <CardView updateState={updateState} />;
    } else if (state.showDeckContents) {
        return <DeckContents updateState={updateState} />;
    }
};

export default App;
