import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main({windowWidth, loggedIn}) {
    //const windowWidth = props;

    return (
        <>
            <Header loggedIn={loggedIn} windowWidth={windowWidth}/>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </>
    )
}

export default Main;