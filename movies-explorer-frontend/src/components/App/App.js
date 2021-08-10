import { React, useEffect, useState } from 'react';
import {Route, Redirect, Switch, useHistory, Link} from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useLocation } from 'react-router-dom';
import * as MoviesApi from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Menu from '../Menu/Menu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getToken, setToken } from '../../utils/utils';
import initialsMovie from '../../utils/constants';

function App() {
    const [currentUser, setCurrentUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [movies, setMovies] = useState([]);
    const [initialMovies, setInitialMovies] = useState([]);
    //const [initialSavedMomies, setMoviesSave] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState('');
    const [initialSavedMomies, setInitialSavedMovies] = useState([]);
    const location = useLocation().pathname;

    const history = useHistory();
   
    useEffect(()=> {
      const jwt = localStorage.getItem('jwt');
      setToken(jwt)
      tokenCheck(jwt)
    },[]);




/*
    useEffect(() => {
        tokenCheck();
      }, []);
*/
    
      function registerAuth(state) {
        //setIsInfoTooltip(true);
        setIsAuth(state)
      }
        /*Добавить нового пользователя */
      function handleRegister(name, email, password){
          return MainApi.register(name, email, password)
            .then((res) => {
              registerAuth(true);
              console.log(res)
              history.push('/signin')
            })
            .catch((err) => {
              registerAuth(false);
              if(err === 400) {
                console.log("Некорректно заполнено одно из полей");
              }
              console.log(err)
            })
      }
      /*Проверка токена */
      function tokenCheck(jwt) {
        //const jwt = localStorage.getItem('jwt');
        
        if(jwt) {
          //setToken(jwt)

          MainApi.getContent(jwt)
            .then((res) => {
                setLoggedIn(true);
                history.push('/movies');

            })
            .catch((err) => {
              if(err === 401) {
                console.log("Токен не передан или передан не в том формате");
              }
            
            })
        }
      }
  
        /* Вход */
      function handleLogin(email, password) {
        
        return MainApi.authorize(email, password)
          .then((res) => {
            localStorage.setItem('jwt', res.token);
            console.log(res.token)
            console.log(res.token)
            setToken(res.token)
            setLoggedIn(true);
            setIsAuth(true);
            history.push('/movies')
            tokenCheck();
            
            
          })
          .catch((err) => {
            if(err === 400) {
              console.log("Не передано одно из полей");
            }
            if(err === 401) {
              console.log("Пользователь с email не найден");
            }
          })
      }



      /* Выход  */
      function onSignOut() {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
      }
      /* Получить весь список фильмов */
    function getSavedMovies() {
        setIsLoading(true);
        MainApi.getSavedMovie()
          .then((res) => {
              setInitialSavedMovies(res)
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false);
          })
    }

    function handleSearch(checked) {

        getSavedMovies();
        const keyword = localStorage.getItem('keyword');
        
        const sortedMovies = movies.filter(movie => {
          return movie.nameRU.toLowerCase().includes(keyword)
        })
        console.log(sortedMovies)
        if (checked) {
          location === '/movies'
          ? setMovies(sortedMovies.filter(movie => movie.duration <= 40))
          : setInitialMovies(sortedMovies.filter(movie => movie.duration <= 40))
        } else {

          setMovies(sortedMovies)
          setInitialMovies(sortedMovies)

        }   
    }
    /* Cохранить фильм */
    function handleSaveMovie(movie) {
      const jwt = getToken();
      console.log(jwt)
        MainApi.saveMovie(movie)
          .then((movie) => {
              console.log(movie._id)
              getSavedMovies()
              setInitialSavedMovies([movie, ...initialSavedMomies])
          })
          .catch((err) => {
              console.log(err)
          })
    }
    function handleUpdateUser(user) {
      MainApi
        .patchUserData(user)
        .then((res) => {
          console.log(user)
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function handleDeleteSavedMovie(movie) {
      
      MainApi.deleteMovie(movie._id)
        .then(() => {
          const newCardsArr = initialSavedMomies.filter((c) => c._id !== movie._id);
          setInitialSavedMovies(newCardsArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    

    function updateWidth() {
        setWindowWidth(window.innerWidth);
    }
    
    useEffect(() => {
      //const jwt = localStorage.getItem('jwt');
      setIsLoading(true);
      Promise.all([MainApi.getUserInfo(),MoviesApi.getMovies(), MainApi.getSavedMovie()])
        .then(([user, movies, saveedMovies]) => {
          setCurrentUser(user);
          console.log(user)
          setMovies(movies);
          setInitialSavedMovies(saveedMovies)
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        })
    
    },[loggedIn, history]);

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => {
          window.removeEventListener('resize', updateWidth);
        }
    })

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>
                    <Route exact path='/'>
                        <Main
                            windowWidth={windowWidth}
                        />
                    </Route>
                    <ProtectedRoute
                        exact path='/movies'
                        component={Movies}
                        windowWidth={windowWidth}
                        //movies={movies}
                        movies={initialMovies}
                        handleSaveMovie={handleSaveMovie}
                        loggedIn={loggedIn}
                        handleSearch={handleSearch}
                        savedMovies={initialSavedMomies}
                        handleDeleteMovie={handleDeleteSavedMovie}
                        handleDeleteSavedMovie={handleDeleteSavedMovie}
                        isLoading={isLoading}
                    ></ProtectedRoute>
                    <ProtectedRoute
                        exact path='/saved-movies'
                        component={SavedMovies}
                        savedMovies={initialSavedMomies}
                        handleDeleteMovie={handleDeleteSavedMovie}
                        windowWidth={windowWidth}
                        loggedIn={loggedIn}
                        handleSearch={handleSearch}
                        isLoading={isLoading}

                    ></ProtectedRoute>
                    <ProtectedRoute
                        exact path='/profile'
                        component={Profile}
                        loggedIn={loggedIn}
                        onUpdateUser={handleUpdateUser}
                        onSignOut={onSignOut}
                    ></ProtectedRoute>

                    <Route exact path='/signin'>
                        <Login onLogin={handleLogin}/>
                    </Route>
                    <Route exact path='/signup'>
                        <Register onRegister={handleRegister}/>
                    </Route>
                    <Route>
                        {loggedIn ? <Redirect to="/movies"/> : <Redirect to="/signin"/>}
                    </Route>
                    
                </Switch>
            </CurrentUserContext.Provider>
        </>
    )
}

export default App;
