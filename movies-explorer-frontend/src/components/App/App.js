import { React, useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Menu from '../Menu/Menu';

function App() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function updateWidth() {
        setWindowWidth(window.innerWidth);
      }
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        //window.addEventListener('keydown', handleEscClick);
        return () => {
          window.removeEventListener('resize', updateWidth);
          //window.removeEventListener('keydown', handleEscClick);
        }
      })
      

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Main
                        windowWidth={windowWidth}

                    />
                </Route>
                <Route exact path='/movies'>
                    <Movies />
                </Route>
                <Route path='/saved-movies'>
                    <SavedMovies />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/signin'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Register />
                </Route>
                
            </Switch>
        </>
    )
}

export default App;