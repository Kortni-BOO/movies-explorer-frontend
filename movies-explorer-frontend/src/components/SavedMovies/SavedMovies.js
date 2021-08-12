import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({handleSaveMovie, savedMovies, windowWidth, handleDeleteMovie, handleSearch }) {
    return (
        <>
            <Header windowWidth={windowWidth}/>
            <SearchForm handleSearch={handleSearch}/>
            <MoviesCardList savedMovies={savedMovies} handleDeleteMovie={handleDeleteMovie} movies={savedMovies} isButtomFilms={true} isSaveFilms={true} handleSaveMovie={handleSaveMovie}/>
            <Footer />
        </>
    )
}

export default SavedMovies;