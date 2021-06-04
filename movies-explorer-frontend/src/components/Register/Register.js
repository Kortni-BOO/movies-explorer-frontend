import React from 'react';
import './Register.css';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Form from '../Form/Form';

function Register() {
    return (
        <section className='register'>
            <WelcomeSection title='Добро пожаловать!' />
            <Form 
                inLogin = {true}
                button={'Зарегистрироваться'} 
                text={'Уже зарегистрированы?'} 
                link={'Войти'} 
                pathLink='/signin'
                classButton = 'form__button_register'
                />
        </section>
    )
}

export default Register;