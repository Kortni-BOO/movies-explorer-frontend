import { React, useEffect, useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './Navigation.css';
import Account from '../../images/account.svg';
import Menu from '../Menu/Menu';

function Navigation({windowWidth}) {
    //const windowWidth= props;
    
      
      const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
      function handleMenuClick() {
          setIsMenuPopupOpen(true);
      }
      function closePopup() {
          setIsMenuPopupOpen(false);
      }

      
    return(
    <div className='header__container header__container_movies'>
        {(windowWidth > 1279) && 
        <>
        <div className='header-movies'>
            <Link to='/movies' className='header-movies__link'>Фильмы</Link>
            <Link to='/saved-movies' className='header-movies__link_save'>Сохраненные фильмы</Link>
        </div>
            <Link to='/profile' className='header-account'>
                <img className='header-account_image' src={Account}/>
                <p className='header-account_text'>Аккаунт</p>
            </Link>
        </>
        }
            {(windowWidth <= 1279) && (
            <button onClick={handleMenuClick} className='header__button_menu'></button>
            )}
            <Menu isOpen={isMenuPopupOpen} onClose={closePopup}/>
    </div>
    )
}

export default Navigation;