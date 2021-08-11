import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return(
        <div className="page-not-found">
            <h1 className="page-not-found__title">404</h1>
            <p className="page-not-found__subtitle">Страница не найдена</p>
            <Link className="page-not-found__button" to="/">Назад</Link>
        </div>
    )
}

export default PageNotFound;