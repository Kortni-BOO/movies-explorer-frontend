import { BASE_URL_MOVIE } from './constants';
const responseCheck = (response) => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export const getMovies = () => {
    return fetch(`${BASE_URL_MOVIE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(responseCheck)
}