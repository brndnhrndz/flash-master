import React, { useState } from 'react'

const CollectionContainer = () => {
    const [decks, setDecks] = useState([]);

    return (
        <div id='collection-contaniner'>
            {
                // replace with DeckItem component
                decks.map((deck, index) => (
                    <div key={index}>{deck}</div>
                ))
            }
        </div>
    );
};

export default CollectionContainer;
