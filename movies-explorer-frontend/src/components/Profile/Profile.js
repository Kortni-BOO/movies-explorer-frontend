import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function Profile({onSignOut, onUpdateUser, loggedIn}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    
    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name,
          email,
        });
    }
    React.useEffect(() => {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }, [currentUser]);

    return (
        <>
            <Header />
            <section className='profile'>
                <div className='profile__content'>
                    <h1 className='profile__header'>Привет, {currentUser.name}!</h1>
                    <form onSubmit={handleSubmit} className='profile__form'>
                        <fieldset className='profile__fieldset profile__fieldset_name'>
                            <label className='profile__label' htmlFor='name'>Имя</label>
                            <input
                                className='profile__input profile__input_name'
                                value={name}
                                type='text'
                                id='name'
                                required
                                onChange={handleChangeName}
                                ></input>
                        </fieldset>
                        <fieldset className='profile__fieldset'>
                            <label className='profile__label' htmlFor='name'>Почта</label>
                            <input
                                className='profile__input profile__input_name'
                                value={email}
                                type='text'
                                id='name'
                                required
                                onChange={handleChangeEmail}
                                ></input>
                        </fieldset>
                    
                    <button type='submit' className='profile__button profile__button_edit'>Редактировать</button>
                    <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
                    </form>
                    <p className="profile__error-text">{}</p>
                </div>
            </section>

        </>
    )
}

export default Profile;