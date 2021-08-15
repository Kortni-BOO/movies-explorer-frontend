import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
                <h5 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h5>
                <div className='footer__container'>
                    <p className='footer__info'>&copy; 2021</p>
                    <ul className='footer__items'>
                        <li className='footer__item'>
                            <a className='footer__link' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link'>Github</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link'>Facebook</a>
                        </li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer;