import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return(
        <section className='search-form'>
            <div className='search-form__container'>
                <form className='search-form__form'>
                    <input className='search-form__input' placeholder='Фильм'/>
                    <button className='search-form__button'/>
                </form>
            </div>
            <div className='search-form__checkbox'>
                <FilterCheckbox /> 
                <p className='search-form__checkbox_text'>Короткометражки</p>
            </div>
            <hr className='search-form__line'></hr>
        </section>
    )
}

export default SearchForm;