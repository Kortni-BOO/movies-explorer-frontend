import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom';
import  {useForm, useFormWithValidation} from '../../utils/vilidate';

function Form({ inLogin, button, text, link, pathLink, classButton, onRegister, onLogin}) {
  
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation()


  

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
       
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

   
    
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        if(inLogin) {
            console.log(values)
            onRegister(values.name, values.email, values.password);
        } else {
            onLogin(values.email, values.password);
        }
        
    }
    return (
        <section className='form__section'>
            <form className='form' onSubmit={handleSubmit}>
                {inLogin &&
                <fieldset className='form__fieldset'>
                    <label className='form__label'>Имя</label>
                    <input
                        className='form__input'
                        required
                        value={values.name || ""} onChange={handleChange}
                        pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                        type="text"
                        name="name"
                        
                        ></input>
                        <span className='form__error form__error-name'>{errors.name}</span>
                </fieldset>
                }
                <fieldset className='form__fieldset'>
                    <label className='form__label'>Email</label>
                    <input
                        className='form__input'
                        required
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}></input>
                    <span className='form__error form__error-email'>{errors.email}</span>
                </fieldset>
                <fieldset className='form__fieldset'>
                    <label className='form__label'>Пароль</label>
                    <input
                        className='form__input'
                        required
                        type="password"
                        minLength="4"
                        value={values.password}
                        name="password"
                        onChange={handleChange}></input>
                    <span className='form__error form__error-email'>{errors.password}</span>
                </fieldset>

            <button type='submit' className={`form__button ${classButton}`}>{button}</button>
            </form>
            <p className='form__text'>{text}<Link className='form__text_link' to={pathLink}>{link}</Link></p>
        </section>
    )
}

export default Form;