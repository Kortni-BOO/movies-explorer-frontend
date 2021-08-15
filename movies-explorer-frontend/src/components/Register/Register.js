import React from 'react';
import './Register.css';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Form from '../Form/Form';

function Register({onRegister}) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeName(e) {
        console.log(e.target.value)
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
        console.log({email})
        // Передаём значения управляемых компонентов во внешний обработчик
        onRegister(name, email, password);
    }

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
                onRegister={onRegister}
                
                />
        </section>
    )
}

export default Register;