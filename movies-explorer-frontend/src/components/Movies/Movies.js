import {React, useEffect, useState} from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function Movies({windowWidth, movies, handleSaveMovie, handleSearch, savedMovies, handleDeleteMovie,handleDeleteSavedMovie, isLoading}) {

    return(
        <div className='page'>
            <Menu />
            <Header 
                windowWidth={windowWidth}
            />
            <SearchForm handleSearch={handleSearch}/>
            {isLoading
                ? <Preloader />
                : <MoviesCardList
                    windowWidth={windowWidth}
                    movies={movies}
                    handleSaveMovie={handleSaveMovie}
                    savedMovies={savedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                />
            
            }

            <Footer />
        </div>
    )
}

export default Movies;