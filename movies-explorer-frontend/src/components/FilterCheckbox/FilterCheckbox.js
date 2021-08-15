import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({onChange}) {

    
    return(
        <input type='checkbox' onChange={onChange} className='filter-checkbox' />
    )
}

export default FilterCheckbox;