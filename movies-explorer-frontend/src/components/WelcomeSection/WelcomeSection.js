import React from 'react';
import './WelcomeSection.css';

function WelcomeSection(props) {
    const { title } = props;
    return (
        <header className='welcome'>
            <div className='welcome__content'>
                <div className='welcome__logo'></div>
                <h1 className='welcome__title'>{title}</h1>
            </div>
        </header>
    )
}

export default WelcomeSection;