import React from 'react';
import CardItem from './CardItem.js';

const ContentsContainer = ({ deck, updateState }) => {
    return (
        <div className='collection-grid'>
            {
                deck.cards.map((card, index) => (
                    <CardItem
                        card={card}
                        updateState={updateState} />
                ))
            }
        </div>
    );
};

export default ContentsContainer;
