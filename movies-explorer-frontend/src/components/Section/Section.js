import React from 'react';
import './Section.css';
function Section(props) {
    return (
        <section className='section'>
            <div className={`section__content ${props.class}`}>
                <h2 className={`section__header ${props.classHeader}`}>{props.title}</h2>
                {props.children}
            </div>
        </section>
    )
}
export default Section;