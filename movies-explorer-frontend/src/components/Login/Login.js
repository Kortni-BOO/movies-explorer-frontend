import React from 'react';
import './Login.css';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Form from '../Form/Form';

function Login() {
    return (
        <section className='login'>
            <WelcomeSection title='Рады видеть' />
            <Form button={'Войти'} text={'Ещё не зарегистрированы?'} link={'Регистрация'} pathLink='/signup'/>
        </section>
    )
}

export default Login;