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
                        title='Education' contenta='MSc in Imeperial College' contentb='BEng in University of Glasgow'/>
                        <AboutCards icon={<FaReact className='about_icons' />} 
                        title='Skills' contenta='React Web Development' contentb='Data Science & Machine Learning '/>
                        <AboutCards icon={<BiLike className='about_icons' />} 
                        title='Hobbies' contentb='Hot Pot & Pizza Forever' contenta='Video Editting'/>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <a href='#contact' className='btn btn-variant'>Let's Talk</a>

                </div>

            </div>






        </section>
    )
}

export default About