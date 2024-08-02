import React, { useState } from 'react'

import Landing from './pages/Landing/Landing.js'
import DeckCreation from './pages/DeckCreation/DeckCreation.js'
import DeckCollection from './pages/DeckCollection/DeckCollection.js'
import CardView from './pages/CardView/CardView.js'
import DeckContents from './pages/DeckContents/DeckContents.js'

const App = () => {
    const [showLanding, setShowLanding] = useState(true);
    const [showDeckCreation, setShowDeckCreation] = useState(false);
    const [showDeckCollection, setShowDeckCollection] = useState(false);
    const [showCardView, setShowCardView] = useState(false);
    const [showDeckContents, setShowDeckContents] = useState(false);

    if (showLanding) {
        return <Landing
            setShowLanding={setShowLanding}
            setShowDeckCreation={setShowDeckCreation} 
            setShowDeckCollection={setShowDeckCollection} />;
    } else if (showDeckCreation) {
        return <DeckCreation
            setShowDeckCreation={setShowDeckCreation}
            setShowDeckCollection={setShowDeckCollection} />;
    } else if (showDeckCollection) {
        return <DeckCollection
            setShowDeckCollection={setShowDeckCollection}
            setShowDeckCreation={setShowDeckCreation}
            setShowCardView={setShowCardView}
            setShowLanding={setShowLanding} />;
    } else if (showCardView) {
        return <CardView
            setShowCardView={setShowCardView}
            setShowDeckContents={setShowDeckContents}
            setShowDeckCollection={setShowDeckCollection} />
    } else if (showDeckContents) {
        return <DeckContents
            setShowDeckContents={setShowDeckContents}
            setShowCardView={setShowCardView} />
    }
}

export default App;
