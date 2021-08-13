import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({isNotFound, handleIsShort, handleSaveMovie, savedMovies, windowWidth, handleDeleteMovie, handleSearch, movies, handleStateCheck, handleCheck }) {
    return (
        <>
            <Header windowWidth={windowWidth}/>
            <SearchForm handleSearch={handleSearch} handleIsShort={handleIsShort}/>
            <MoviesCardList
                savedMovies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
                movies={movies}
                isButtomFilms={true}
                isSaveFilms={true}
                handleSaveMovie={handleSaveMovie}
                handleCheck={handleCheck}
                isNotFound={isNotFound}
                 />
            <Footer />
        </>
    )
}

export default SavedMovies;