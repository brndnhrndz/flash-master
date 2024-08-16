import React from 'react';
import Header from '../../components/Header.js';
import CardItem from './CardItem.js';

const CardCollection = ({ state, updateState }) => {
    const handleExitClick = () => {
        updateState({
            showCardCollection: false,
            showCardView: true
        });
    };

    return (
        <>
            <Header
                state={state}
                updateState={updateState} />

            <div className='collection-container'>
                <div className='collection-grid'>
                    {
                        state.activeDeck.cards.map((card, index) => (
                            <CardItem
                                card={card}
                                updateState={updateState} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CardCollection;
