import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section id='aboutme'>
        <Section title='Студент'>
            <div className='about-me__container'>
            <div className='about-me__info'>
                <h3 className='about-me__title'>Виталий</h3>
                <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
                <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className='about-me__list'>
                    <li className='about-me__list-item'>
                        <a className='about-me__link' href='https://www.facebook.com/' target='_blank'>Facebook</a>
                    </li>
                    <li className='about-me__list-item'>
                        <a className='about-me__link' href='https://github.com/' target='_blank'>Github</a>
                    </li>
                </ul>
            </div>
            <img alt='Фото студента'className='about-me__avatar'/>
            </div>
            <Portfolio />
        </Section>
        </section>
    )
}

export default AboutMe;