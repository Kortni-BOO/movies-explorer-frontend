import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation'
import './Header.css';

function Header(props) {
    const windowWidth = props;


    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'><div className='header__logo'></div></Link>
                <Switch>
                    <Route exact path='/'>
                        <Link className='header__link header__register'>Регистрация</Link>
                        <Link to='/signin' className='header__link header__login_button'><p className='header__login_text'>Войти</p></Link>
                    </Route>
                        <Route path='/movies'>
                            <Navigation onMenuPopup windowWidth={windowWidth}/>
                        </Route>
                        <Route path='/saved-movies'>
                            <Navigation onMenuPopup windowWidth={windowWidth}/>
                        </Route>
                        <Route path='/profile'>
                            <Navigation onMenuPopup windowWidth={windowWidth}/>
                        </Route>

                </Switch>
                </div>
        </header>
    )
}

export default Header;

/*
                    <a className='header__register'>Регистрация</a>
                <button className='header__login_button'><p className='header__login_text'>Войти</p></button>
 */