import {React, useState, useEffect} from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [checked, setChecked] = useState(false);
    const [keyword, setKeyword] = useState('');
    function handleKeyword(e) {
        setKeyword(e.target.value);
    }


    function handleCheck() {
        console.log(checked)
        setChecked(!checked);
      }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(keyword)
        localStorage.setItem('keyword', keyword);
        props.handleSearch(checked)
      }

      useEffect(() => {
        props.handleSearch(checked)
        setKeyword(localStorage.getItem('keyword'))
      }, [])

      useEffect(() => {
        props.handleSearch(checked)
      }, [checked])
    
    return(
        <section className='search-form'>
            <div className='search-form__container'>
                <form
                    className='search-form__form'
                    onSubmit={handleSubmit}>
                    <input
                        className='search-form__input'
                        placeholder='Фильм'
                        value={keyword}
                        onChange={handleKeyword}
                        required/>
                    <button className='search-form__button'/>
                </form>
            </div>
            <div className='search-form__checkbox'>
                <FilterCheckbox onChange={handleCheck}/> 
                <p className='search-form__checkbox_text'>Короткометражки</p>
            </div>
            <hr className='search-form__line'></hr>
        </section>
    )
}

export default SearchForm;