import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom';

function Form(props) {
    const { inLogin, button, text, link, pathLink, classButton } = props;
    return (
        <section className='form__section'>
            <form className='form'>
                {inLogin &&
                <fieldset className='form__fieldset'>
                    <label className='form__label'>Имя</label>
                    <input className='form__input'></input>
                </fieldset>
                }
                <fieldset className='form__fieldset'>
                    <label className='form__label'>Email</label>
                    <input className='form__input'></input>
                </fieldset>
                <fieldset className='form__fieldset'>
                    <label className='form__label'>Пароль</label>
                    <input className='form__input'></input>
                </fieldset>

            </form>
            <button className={`form__button ${classButton}`}>{button}</button>
            <p className='form__text'>{text}<Link className='form__text_link' to={pathLink}>{link}</Link></p>
        </section>
    )
}

export default Form;