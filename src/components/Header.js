import React from 'react';
import '../assets/Header.css'

const Header = ({ state, updateState }) => {
    const handleLogoClick = () => {
        switch (state.activeComponent) {
            case 1: {
                updateState({
                    showDeckCreation: false,
                    showLanding: true,
                    activeComponent: 0
                });
            };
            case 2: {
                updateState({
                    showDeckCollection: false,
                    showLanding: true,
                    activeComponent: 0
                });
            }
            case 3: {
                updateState({
                    showCardView: false,
                    showLanding: true,
                    activeComponent: 0
                });
            }
            case 4: {
                updateState({
                    showCardCollection: false,
                    showLanding: true,
                    activeComponent: 0
                });
            }
        }
    };

    const handleDecksClick = () => {
        switch (state.activeComponent) {
            case 0: {
                updateState({
                    showLanding: false,
                    showDeckCollection: true,
                    activeComponent: 2
                });
            }
            case 1: {
                updateState({
                    showDeckCreation: false,
                    showDeckCollection: true,
                    activeComponent: 2
                });
            }
            case 3: {
                updateState({
                    showCardView: false,
                    showDeckCollection: true,
                    activeComponent: 2
                });
            }
            case 4: {
                updateState({
                    showCardCollection: false,
                    showDeckCollection: true,
                    activeComponent: 2
                });
            }
        }
    };

    const handleCardsClick = () => {
        switch (state.activeComponent) {
            case 3: {
                updateState({
                    showCardView: false,
                    showCardCollection: true,
                    activeComponent: 4
                });
            }
        }
    };

    return (
        <div id='header'>
            <div id='header-content'>
                <h1
                    id='logo'
                    onClick={handleLogoClick}>
                    FlashMaster
                </h1>
                <div id='nav'>
                    <ul>
                        <li onClick={handleDecksClick}>Decks</li>
                        <li
                            onClick={handleCardsClick}
                            className='ml-header-nav-li'>Cards</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
