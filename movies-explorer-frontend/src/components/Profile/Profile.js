import React from 'react';
import './Profile.css';
import Header from '../Header/Header';


function Profile() {
    const [name, setName] = React.useState('Виталий');
    const [email, setEmail] = React.useState('pochta@yandex.ru');

    return (
        <>
            <Header />
            <section className='profile'>
                <div className='profile__content'>
                    <h1 className='profile__header'>Привет, Виталий!</h1>
                    <form className='profile__form'>
                        <fieldset className='profile__fieldset profile__fieldset_name'>
                            <label className='profile__label' htmlFor='name'>Имя</label>
                            <input className='profile__input profile__input_name' value={name} type='text' id='name' required></input>
                        </fieldset>
                        <fieldset className='profile__fieldset'>
                            <label className='profile__label' htmlFor='name'>Почта</label>
                            <input className='profile__input profile__input_name' value={email} type='text' id='name' required ></input>
                        </fieldset>
                    </form>
                    <button className='profile__button profile__button_edit'>Редактировать</button>
                    <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
                </div>
            </section>

        </>
    )
}

export default Profile;