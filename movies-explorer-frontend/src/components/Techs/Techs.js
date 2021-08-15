import React from 'react';
import Section from '../Section/Section';
import './Techs.css';

function Techs() {
    return (
        <section id='techs'>
        <Section title="Технологии" class='section__techs' classHeader='section__techs_header'> 
            <div className='techs__info'>
                <h3 className='techs__title'>7 технологий</h3>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__items'>
                    <li className='techs__item'><p className='techs__item_text'>HTML</p></li>
                    <li className='techs__item'><p className='techs__item_text'>CSS</p></li>
                    <li className='techs__item'><p className='techs__item_text'>JS</p></li>
                    <li className='techs__item'><p className='techs__item_text'>React</p></li>
                    <li className='techs__item'><p className='techs__item_text'>Git</p></li>
                    <li className='techs__item'><p className='techs__item_text'>Express.js</p></li>
                    <li className='techs__item'><p className='techs__item_text'>mongoDB</p></li>
                </ul>
            </div>
        </Section>
        </section>
    )
}

export default Techs;