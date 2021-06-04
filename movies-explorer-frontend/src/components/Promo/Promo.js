import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
    return(
        <section className='promo'>
            <div className='promo__banner'>
                <h1 className='promo__banner_header'>Учебный проект студента факультета Веб-разработки.</h1>
                <NavTab />
            </div>
        </section>
    )
}

export default Promo;