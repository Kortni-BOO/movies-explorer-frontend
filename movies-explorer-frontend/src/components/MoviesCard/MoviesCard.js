import React from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MOVIES_IMAGE_URL from '../../utils/constants';
import './MoviesCard.css';
import { saveMovie } from '../../utils/MainApi';

function MoviesCard(props) {
    //const movie = props;
    
    const location = useLocation().pathname;
   
      const isLiked = props.savedMovies.some((movie) => movie.movieId === props.item.id);

      const cardLikeButtonClassName = (
        `element_button-save ${isLiked ? 'element_button-save-active' : 'element_button-save-inactive'}`
    );

      const handleLikeClick = () => {
        if(!isLiked) {
          props.handleSaveMovie(props.item);
        } else {
          const savedCard = props.savedMovies.find((movie) => movie.movieId === props.item.id);
          props.handleDeleteSavedMovie(savedCard);
        }
      }
    
      function handleDeleteClick() {
        props.handleDeleteMovie(props.item);
      }

      function handleImageClick() {
        location === '/movies'
        ? window.open(props.item.trailerLink, '_blank')
        : window.open(props.item.trailer, '_blank')
      }


    return(
        <li className='element'>
            <div className='element__card'>
                {location === '/saved-movies' ?
                <img className='element__image' onClick={handleImageClick} alt='Картинка фильма сохранение' src={props.item.image}/> 
                :
                <img className='element__image' onClick={handleImageClick} alt='Картинка фильма' src={`https://api.nomoreparties.co${props.image.url}`}/> 
            }
                
            </div>
            <div className='element__content'>
                <h2 className='element__text'>{props.nameRU}</h2>
                {location === '/movies' ? 
                 <button
                 className={`${cardLikeButtonClassName}`}
                 
                 onClick={handleLikeClick}
                />
                 : <button
                 className="element_button-save element_button-delete"
                 onClick={handleDeleteClick}
                />
                }
            </div>
            <p className='element__time'>{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</p>
        </li>
    )
}

export default MoviesCard;

//{` ${cardLikeButtonClassName} ${props.class}`}
//<div className='element__image' style={{ backgroundImage: `url(${props.image})` }}></div>    
//`https://api.nomoreparties.co${props.image.url}`

/**
 {
            country: props.item.country || "default",
            director: props.item.director,
            duration: props.item.duration,
            year: props.item.year,
            description: props.item.description,
            image: props.item.image.url
              ? `${MOVIES_IMAGE_URL}${props.item.image.url}`
              : "https://www.youtube.com",
            trailer: props.item.trailerLink,
            movieId: props.item.id,
            nameRU: props.item.nameRU,
            nameEN: props.item.nameEN,
            thumbnail: props.item.image.formats.thumbnail.url
              ? `${MOVIES_IMAGE_URL}${props.item.image.formats.thumbnail.url}`
              : "https://www.youtube.com",
            owner: props.item.owner,
          }
 */