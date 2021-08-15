import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import  {useForm, useFormWithValidation} from '../../utils/vilidate';


function Profile({onSignOut, onUpdateUser, loggedIn, statusAccess, statusError, windowWidth}) {
    const currentUser = React.useContext(CurrentUserContext);
    /*
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
    */
    const { values, handleChange, errors, isValid } = useFormWithValidation({ name: currentUser.name, email: currentUser.email });
    const [isEditActive, setEditActive] = React.useState(false);
  
    const saveButtonToggle = () => setEditActive(true);
    console.log(values)
    function handleSubmit(evt) {
      evt.preventDefault();
      onUpdateUser({ name: values.name, email: values.email });
    }
    return (
        <>
            <Menu />
            <Header windowWidth={windowWidth}/>
            <section className='profile'>
                <div className='profile__content'>
                    <h1 className='profile__header'>Привет, {currentUser.name}!</h1>
                    <form onSubmit={handleSubmit} className='profile__form'>
                        <fieldset className='profile__fieldset profile__fieldset_name'>
                            <label className='profile__label' htmlFor='name'>Имя</label>
                            <input
                                className='profile__input profile__input_name'
                                //value={name}
                                value={values.name || ''}
                                name="name"
                                type='text'
                                id='name'
                                required
                                onChange={handleChange}
                                ></input>
                                <span className='form__error_profile form__error-name'>{errors.name}</span>
                        </fieldset>
                        <fieldset className='profile__fieldset'>
                            <label className='profile__label' htmlFor='name'>Почта</label>
                            <input
                                className='profile__input profile__input_name'
                                //value={email}
                                value={values.email || ''}
                                name="email"
                                type='text'
                                id='name'
                                required
                                onChange={handleChange}
                                ></input>
                                <span className='form__error_profile form__error-email'>{errors.email}</span>
                        </fieldset>
                        {statusAccess && <p className="profile__message profile__message_access">{statusAccess}</p>}
                    {statusError && <p className="profile__message profile__message_error">{statusError}</p>}
                    <button type='submit' className='profile__button profile__button_edit'>Редактировать</button>
                    <button className='profile__button profile__button_exit' onClick={onSignOut}>Выйти из аккаунта</button>
                    </form>

                </div>
            </section>

        </>
    )
}

export default Profile;