import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return(
        <section className='portfolio'>
            <div claasName='portfolio__content'>
                <h4 className='portfolio__title'>Портфолио</h4>
                <ul className='portfolio__links'>
                    <li className='portfolio__link'>
                        <a className='portfolio__link_name'>Статичный сайт</a>
                        <a className='portfolio__link_image'></a>
                    </li>
                    <li className='portfolio__link'>
                        <a className='portfolio__link_name'>Адаптивный сайт</a>
                        <a className='portfolio__link_image'></a>
                    </li>
                    <li className='portfolio__link'>
                        <a className='portfolio__link_name'>Одностраничное приложение</a>
                        <a className='portfolio__link_image'></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;