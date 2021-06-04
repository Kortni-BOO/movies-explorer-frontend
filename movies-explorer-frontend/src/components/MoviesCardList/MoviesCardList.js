import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import initialsMovie from '../../utils/constants';
import Preloade from '../Preloader/Preloader';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
    const { isButtomFilms, isSaveFilms, isDesktop, isMobile, windowWidth } = props;
    const initialsMovieSave = initialsMovie.slice(0, 3);
    const [ moviesCount, setMoviesCount ] = useState([0]);

    function moviesShow () {
        if(windowWidth < 1279 && windowWidth > 768) {
            //setMoviesCount([8])
            
        }
    }
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                <ul className='elements'>
                    {
                    !isSaveFilms ?
                    initialsMovie.map((item) => (
                        <MoviesCard
                            name={item.name}
                            image={item.image}
                        />
                    ))
                    : initialsMovieSave.map((item) => (
                        <MoviesCard 
                            name={item.name}
                            image={item.image}
                            class='element_button-delete'
                        />
                    ))
                    }
                </ul>
            </div>
            {isButtomFilms 
                ? <div className='movies-card-list__block'>
                    <button className='movies-card-list__button_none'></button>
                  </div>
                : <button className='movies-card-list__button'>Ещё</button>
                
            }
            
        </section>
    )
}

export default MoviesCardList;