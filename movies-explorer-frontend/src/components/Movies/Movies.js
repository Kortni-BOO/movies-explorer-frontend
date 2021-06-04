import {React, useEffect, useState} from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(props) {

    return(
        <div className='page'>
            <Menu />
            <Header 
            windowWidth={props.windowWidth}/>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    )
}

export default Movies;