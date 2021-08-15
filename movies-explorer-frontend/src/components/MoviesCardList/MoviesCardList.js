import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
//import { useMediaQuery } from 'react-responsive';
import { useMediaQuery } from 'react-responsive';
import initialsMovie from '../../utils/constants';


function MoviesCardList({isNotFound, isButtomFilms,handleDeleteSavedMovie, isSaveFilms, windowWidth, movies, handleSaveMovie, savedMovies, handleDeleteMovie }) {
    //Массив для фильмов
    const [initialMovies, setInitialMovies] = useState([]);
    //Изначальное отображение
    const [moviesNumber, setMoviesNumber] = useState(16);
    //Кольчество добавляемых фильмов на копку
    const [addMovies, setAddMovies] = useState(0);
    const [isButtonActive, setIsButtonActive] = useState(true);

 
    const ButtonClassName = (
        `movies-card-list__button ${isButtonActive ? 'movies-card-list__button' : 'movies-card-list__button_none'}`
    );

    const location = useLocation().pathname;
    function moviesShow () {
        if(windowWidth > 769) {
            setMoviesNumber(16);
            setAddMovies(4);
        } else if(windowWidth <= 768 && windowWidth > 414) {
            setMoviesNumber(8);
            setAddMovies(2);
        } else {
            setMoviesNumber(5);
            setAddMovies(2);
        }
    }


    useEffect(() => {
        if (location === '/movies') {
            if(movies.length < moviesNumber) {
                setIsButtonActive(false)
            } else {
                setIsButtonActive(true)
            }
        }
    },[movies])
    
    function handleAddMovies() {
        setInitialMovies(movies.slice(0, initialMovies.length + addMovies))
    }

    useEffect(() => {
        moviesShow();
    }, [windowWidth])

    useEffect(() => {
        if(!isSaveFilms) {
            setInitialMovies(movies.slice(0, moviesNumber))
        } else {
            setInitialMovies(movies)
        }
    },[movies])
    

    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                
                    {isNotFound ? (
                        <p className="elements_not-found">Ничего не найдено!</p>
                    ) : (
                        <ul className='elements'>
                            {
                            initialMovies.map((item) => (
                                <MoviesCard
                                    key={location === '/movies' ? item.id : item._id} {...item}
                                    //key = {item.id || item._id} {...item}
                                    item={item}
                                    handleSaveMovie={handleSaveMovie}
                                    savedMovies={savedMovies}
                                    handleDeleteMovie={handleDeleteMovie}
                                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                                />
                            ))}
                            </ul>
                    )}

                
            </div>

            {isButtomFilms 
                ? (<div className='movies-card-list__block'>
                    <button className='movies-card-list__button_none'></button>
                  </div>
                ) : (<button
                    className={`${ButtonClassName}`}
                    onClick={handleAddMovies}
                  >
                    Ещё
                  </button>
                )
            }
            
        </section>
    )
}

export default MoviesCardList;


/**
 * name={item.name}
                            image={item.image}
 */