import React from 'react'

const Landing = (props) => {
    const handleCreateDeck = () => {
        props.setShowLanding(false);
        props.setShowDeckCreation(true);
    }

    return (
        <div id='landing'>
            <h1>Flash Master</h1>
            <button type='button' name='create-deck-btn'
                onClick={handleCreateDeck}>
                Create Deck
            </button>
        </div>
    );
}

export default Landing;
