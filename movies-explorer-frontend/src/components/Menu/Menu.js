import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './Menu.css';
import Account from '../../images/account.svg';

function Menu(props) {
    return (
        <section className='popup__menu'>
            <div className={`popup__menu_container ${props.isOpen ? 'popup__menu_is-opened' : ''}`}>
            <button className='popup__menu_button-close' onClick={props.onClose}></button>
            <nav className='popup__menu_nav'>
                <Link to='/'className='popup__menu_link'>Главная</Link>
                <Link to='/movies' className='popup__menu_link popup__menu_link-movies'>Фильмы</Link>
                <Link to='/saved-movies' className='popup__menu_link'>Сохранённые фильмы</Link>
            </nav>
            <Link to='/profile' className='popup__menu_link popup__menu_link-account'>
                    <img className='popup__menu_link-account-image' src={Account}/>
                    <p className='popup__menu_link-account-text'>Аккаунт</p>
                </Link>
            </div>
        </section>
    )
}

export default Menu; 