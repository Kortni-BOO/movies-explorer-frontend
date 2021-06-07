import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    //const movie = props;
    const [isLiked, setIsLiked] = React.useState(false);

    function handleCardLike() {
        setIsLiked(true)
    }
    const cardLikeButtonClassName = (
        `element_button-save ${isLiked ? 'element_button-save-active' : 'element_button-save-inactive'}`
    );
    
    
    
    return(
        <li className='element'>
            <div className='element__card'>
                <img className='element__image' alt='Картинка фильма' src={props.image}/>    
            </div>
            <div className='element__content'>
                <h2 className='element__text'>{props.name}</h2>
                <button
                    className={` ${cardLikeButtonClassName} ${props.class}`}
                    onClick={handleCardLike}
                    >

                </button>
            </div>
            <p className='element__time'>1ч42м</p>
        </li>
    )
}

export default MoviesCard;

//{` ${cardLikeButtonClassName} ${props.class}`}
//<div className='element__image' style={{ backgroundImage: `url(${props.image})` }}></div>    