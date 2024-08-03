import React from 'react';

const CardView = ({ updateState }) => {
    const handleDeckContents = () => {
        updateState({
            showCardView: false,
            showDeckContents: true
        });
    };

    const handleReturn = () => {
        updateState({
            showCardView: false,
            showDeckCollection: true
        });
    };

    return (
        <div id='card-view'>
            <h1>Card View</h1>

            <button type='button'
                onClick={handleDeckContents}>Deck Contents</button>

            <button type='button'>Edit</button>

            <div className='card-face'></div>

            <button type='button'>Flip</button>
            <button type='button'>Previous</button>
            <button type='button'>Next</button>

            <button type='button' onClick={handleReturn}>Return</button>
        </div >
    );
};

export default CardView;
