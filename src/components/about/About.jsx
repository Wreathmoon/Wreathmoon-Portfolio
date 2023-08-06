import React from 'react'
import "./about.css"
import ImageMe from '../../assets/me.jpg'
import { LiaUniversitySolid } from 'react-icons/lia'

function AboutCards(props) {
    return (
        <article className='about_card'>
            {props.icon}
            <h5>{props.title}</h5>
            <small>{props.content}</small>
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
                        <AboutCards icon={<LiaUniversitySolid className='about_icons' />} title='Education' content='Bsc in UESTC' />
                        <AboutCards icon={<LiaUniversitySolid className='about_icons' />} title='Education' content='Bsc in UESTC' />
                        <AboutCards icon={<LiaUniversitySolid className='about_icons' />} title='Education' content='Bsc in UESTC' />
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