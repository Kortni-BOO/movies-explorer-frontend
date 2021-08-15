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
import PageNotFound from '../PageNotFound/PageNotFound';
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
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState('');
    const [initialSavedMomies, setInitialSavedMovies] = useState([]);
    const [initialSearchSavedMomies, setInitialSearchSavedMovies] = useState([]);
    const [statusAccessMessage, setStatusAccessMessage] = useState('');
    const [statusErrorMessage, setStatusErrorMessage] = useState('');
    const [checked, setIsChecked] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [save, setSave] = useState([]);
    const [isNotFound, setIsNotFound] = useState();
    const [messageIsNotFound, setMessageIsNotFound] = useState('');
    const location = useLocation().pathname;

    const history = useHistory();
    useEffect(() => {
      setIsLoading(true);
      Promise.all([MainApi.getUserInfo(),MoviesApi.getMovies(), MainApi.getSavedMovie()])
        .then(([user, movies, saveedMovies]) => {
          setCurrentUser(user);
          console.log(user)
          setMovies(movies);
          if (localStorage.getItem('movies') === null) {
            localStorage.setItem('movies', JSON.stringify(movies));
            setInitialMovies(movies);
          } else {
            setInitialMovies(JSON.parse(localStorage.getItem('movies')));
          }
          setInitialSavedMovies(saveedMovies);
          setSave(saveedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(saveedMovies));
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        })
    
    },[token]);
   console.log(loggedIn)

    //console.log(initialMovies)
    useEffect(()=> {
      const jwt = localStorage.getItem('jwt');
      setToken(jwt)
      tokenCheck(jwt)
      localStorage.getItem('movies', JSON.stringify(initialMovies));
      localStorage.getItem('savedMovies', JSON.stringify(initialSavedMomies));
    },[]);
    
      function registerAuth(state) {
        setIsAuth(state)
      }
        /*Добавить нового пользователя */
      function handleRegister(name, email, password){
          return MainApi.register(name, email, password)
            .then((res) => {
              handleLogin(email, password);
              registerAuth(true);
              setLoggedIn(true);
              //history.push('/signin')
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
        if(jwt) {
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
            setLoggedIn(true);
            setToken(res.token)
            setLoggedIn(true);
            setIsAuth(true);
            history.push('/movies');
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
        history.push('/')
        //setLoggedIn(false);
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
    const [iMovies, setImovies] = useState([]);
    const [iSaveMovies, setIsaveMovies] = useState([]);
    function handleIsShort(checked) {
      if(location === '/movies') {
        if (!checked) {
          console.log('2')
          setInitialMovies(iMovies.filter(movie => movie.duration <= 40))
          localStorage.setItem('movies', JSON.stringify(iMovies.filter((movie) => movie.duration <= 40)));
        } else {
          console.log('21')
          setInitialMovies(iMovies)
          localStorage.setItem('movies', JSON.stringify(iMovies));
        }
      } else {
        if (!checked) {
          console.log('iiiio')
          setInitialSavedMovies(iSaveMovies.filter(movie => movie.duration <= 40))
          localStorage.setItem('savedMovies', JSON.stringify(iSaveMovies.filter((savedMovie) => savedMovie.duration <= 40)));
        } else {
          setInitialSavedMovies(save)

          localStorage.setItem('savedMovies', JSON.stringify(save));
        }
      }

    }
    
    function handleSearch(checked) {
      const keyword = localStorage.getItem('keyword');

      
      if(location === '/movies') {
        const sortedMovies = movies.filter(movie => {
          return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        })
        if(sortedMovies.length === 0) {
          setIsNotFound(true)
        } else {
          setIsNotFound(false)
        }
        localStorage.setItem('movies', JSON.stringify(sortedMovies));
        setInitialMovies(sortedMovies)
        setImovies(sortedMovies)
        console.log(sortedMovies)
      } else {
        const sortedMovies = initialSavedMomies.filter(movie => {
          return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        })
        if(sortedMovies.length === 0) {
          setIsNotFound(true)
        } else {
          setIsNotFound(false)
        }
        localStorage.setItem('savedMovies', JSON.stringify(sortedMovies));
        setInitialSavedMovies(sortedMovies)
        setIsaveMovies(sortedMovies)

      }
      }


    /* Cохранить фильм */
    function handleSaveMovie(movie) {
      const jwt = getToken();
      
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
          setStatusAccessMessage("Вы успешно изменили данные!")
          setCurrentUser(res);
        })
        .catch((err) => {
          setStatusErrorMessage("Данные не сохранились, повторите попытку!")
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
    //setInitialMovies(localStorage.getItem('movies'))
/*
    useEffect(() => {
      localStorage.setItem("movies", JSON.stringify([]))
    }, [token])
    */
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => {
          window.removeEventListener('resize', updateWidth);
        }
    }, [])

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>
                    <Route exact path='/'>
                        <Main
                            loggedIn={loggedIn}
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
                        handleIsShort={handleIsShort}
                        isNotFound={isNotFound}
                    ></ProtectedRoute>
                    <ProtectedRoute
                        exact path='/saved-movies'
                        component={SavedMovies}
                        savedMovies={initialSavedMomies}
                        movies={initialSavedMomies}
                        handleDeleteMovie={handleDeleteSavedMovie}
                        windowWidth={windowWidth}
                        loggedIn={loggedIn}
                        handleSearch={handleSearch}
                        isLoading={isLoading}
                        handleIsShort={handleIsShort}
                        isNotFound={isNotFound}
                    ></ProtectedRoute>
                    <ProtectedRoute
                        exact path='/profile'
                        component={Profile}
                        loggedIn={loggedIn}
                        statusAccess = {statusAccessMessage}
                        statusError = {statusErrorMessage}
                        onUpdateUser={handleUpdateUser}
                        windowWidth={windowWidth}
                        onSignOut={onSignOut}
                    ></ProtectedRoute>

                    <Route exact path='/signin'>
                        <Login onLogin={handleLogin}/>
                    </Route>
                    <Route exact path='/signup'>
                        <Register onRegister={handleRegister}/>
                    </Route>
                    <Route exact path='/movies'>
                        {loggedIn ? <Redirect to='/movies'/> : <Redirect to='/'/>}
                    </Route>
                    <Route exact path='/saved-movies'>
                        {loggedIn ? <Redirect to='/saved-movies'/> : <Redirect to='/'/>}
                    </Route>
                    <Route path="*">
                      <Redirect to="/not-found"/>
                    </Route>
                    <Route path="/not-found">
                        <PageNotFound />
                    </Route>
                    
                </Switch>
            </CurrentUserContext.Provider>
        </>
    )
}

export default App;


/**
 * //getSavedMovies(); 
        const keyword = localStorage.getItem('keyword');
        
        if(location === '/movies') {
          const sortedMovies = movies.filter(movie => {
            return movie.nameRU.toLowerCase().includes(keyword)
          })
          setInitialMovies(sortedMovies)
        } else {
          //getSavedMovies();
          const sortedMovies = initialSavedMomies.filter(movie => {
            return movie.nameRU.toLowerCase().includes(keyword)
          })
          console.log(sortedMovies)
          setInitialSearchSavedMovies(sortedMovies)
          setInitialSavedMovies(sortedMovies)
        }
        /*
        const sortedMovies = movies.filter(movie => {
          return movie.nameRU.toLowerCase().includes(keyword)
        })
        
        if (checked) {
          location === '/movies'
          ? setMovies(sortedMovies.filter(movie => movie.duration <= 40))
          : setInitialMovies(sortedMovies.filter(movie => movie.duration <= 40))
        } else {

          setMovies(sortedMovies)
          setInitialMovies(sortedMovies)

        }  
        movie.description.toLowerCase().includes(keyword.toLowerCase() ||
         || movie.description.toLowerCase().includes(keyword.toLowerCase())
        */
         
 