import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const movie = props;
    return(
        <li className='element'>
            <div className='element__card'>
                <div className='element__image' style={{ backgroundImage: `url(${movie.image})` }}></div>    
            </div>
            <div className='element__content'>
                <h2 className='element__text'>{movie.name}</h2>
                <button className={`element_button-save ${props.class}`}></button>
            </div>
            <p className='element__time'>1ч42м</p>
        </li>
    )
}

export default MoviesCard;