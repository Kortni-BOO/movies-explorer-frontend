import { BASE_URL_MAIN } from './constants';
import { setToken } from './utils';
//export const MOVIES_URL = 'https://api.nomoreparties.co';
const BASE_URL_MOVIE = 'https://api.nomoreparties.co';
const responseCheck = (response) => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export const register = (name, email, password) => {
    return fetch(`${BASE_URL_MAIN}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    .then(responseCheck)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL_MAIN}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(responseCheck)
    .then((data) => {
        if(data) {
            setToken(data.token);
            return data;
        }
    })
};

export const getContent = (jwt) => {
    return fetch(`${BASE_URL_MAIN}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            'authorization' : `Bearer ${jwt}`
            //"Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
    })
        .then(responseCheck)
        //.then(res => console.log(res))
        
}

export const getUserInfo = () => {
    return fetch(`${BASE_URL_MAIN}/users/me`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            //"Authorization" : `Bearer ${jwt}`,
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
    })
        .then(responseCheck)
    //.then(res => console.log(res))
    //.catch(err => console.log(err))
}

export const patchUserData = (userData) => {
    return fetch(`${BASE_URL_MAIN}/users/me`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        //"Authorization" : `Bearer ${jwt}`,
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
    },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    })
      .then(responseCheck)
  }

export const saveMovie = (movie) => {
    const { country, director, duration,
            year, description, nameRU, nameEN } = movie;
    return fetch(`${BASE_URL_MAIN}/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //"Authorization" : `Bearer ${jwt}`,
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            
        },
        body: JSON.stringify({
            country,
            director,
            duration,
            year,
            description,
            image: `${BASE_URL_MOVIE}${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `${BASE_URL_MOVIE}${movie.image.formats.thumbnail.url}`,
            nameRU,
            nameEN,
            movieId: movie.id,
        })
    })
            .then(responseCheck)
            //.catch(err => console.log(err))
}

export const getSavedMovie = () => {
    return fetch(`${BASE_URL_MAIN}/movies`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
    })
            .then(responseCheck)
}
export const deleteMovie = (id) => {
    return fetch(`${BASE_URL_MAIN}/movies/${id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
    })
            .then(responseCheck)
  }


//'Authorization': `Bearer ${localStorage.getItem('jwt')}`

/**
 body: JSON.stringify({
            country,
            director,
            duration,
            year,
            description,
            image: `${BASE_URL_MOVIE}${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `${BASE_URL_MOVIE}${movie.image.formats.thumbnail.url}`,
            nameRU,
            nameEN,
            movieId: movie.id,
        })
 */