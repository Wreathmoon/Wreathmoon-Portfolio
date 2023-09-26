import React from 'react'
import "./about.css"
import ImageMe from '../../assets/me.jpg'
import { LiaUniversitySolid } from 'react-icons/lia'
import { FaReact } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'

function AboutCards(props) {
    return (
        <article className='about_card'>
            {props.icon}
            <h4>{props.title}</h4>
            <h5>{props.contenta}</h5>
            <h5>{props.contentb}</h5>
        </article>
    );
}


function About() {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>

                <div className='about_me'>
                    <div className='about_image'>
                        <img src={ImageMe} alt='about image' />
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <AboutCards icon={<LiaUniversitySolid className='about_icons' />}
                            title='Education' contenta='MSc in Imeperial College' contentb='BEng in University of Glasgow' />
                        <AboutCards icon={<FaReact className='about_icons' />}
                            title='Skills' contenta='React Web Development' contentb='Data Science & Machine Learning ' />
                        <AboutCards icon={<BiLike className='about_icons' />}
                            title='Hobbies' contenta='Video Editting' contentb='Hot Pot & Coffee Forever' />
                    </div>

                    <div className='about_discribe'>
                        <p>
                            Hello everyone, I am Xu Luohao, a front-end developer who knows something about machine learning.
                            And I love using code to make fun, cool-looking, interactive things.
                        </p>
                        <p>
                            Currently, I just graduated from Imperial College and am looking for a job in SDE or Data Science graduate programs in London.
                        </p>
                        <p>
                            Before that, I studied electrical and electronic engineering at the University of Glasgow, machine learning and data science at Imperial College,
                            and taught myself a variety of skills including video editing, mountain biking, and computer assembly.
                        </p>
                    </div>

                    <a href='#contact' className='btn btn-variant'>Let's Talk</a>

                </div>

            </div>






        </section>
    )
}

export default About