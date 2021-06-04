import React from 'react';
import './AboutProject.css';
import Section from '../Section/Section';

function AboutProject() {
    return (
        <section id="aboutproject">
        <Section title="О проекте">
                <div className='project__info' >
                    <div className='project__info_content'>
                        <h2 className="project__info_title">Дипломный проект включал 5 этапов</h2>
                        <p className='project__info_text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='project__info_content'>
                        <h2 className="project__info_title">На выполнение диплома ушло 5 недель</h2>
                        <p className='project__info_text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='project__progress'>
                    <div className='project__progress_backend'><p className='text_backend'>1 неделя</p></div>
                    <div className='project__progress_frontend'><p className='text_frontend'>4 недели</p></div>
                    <div className='project__progress_text'>Back-end</div>
                    <div className='project__progress_text'>Front-end</div>
                </div>
    </Section>
    </section>
    )
}

export default AboutProject;
//<h1 className='project__header'>О проекте</h1>
/*
        <section className='project'>
            <div className='project__content'>
                <Title title="О проекте" />
*/