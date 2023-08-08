import React from 'react'

import './protfolio.css'
import ProjectCard from './ProjectCard'
import Projects from './Projects'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'


function Protfolio() {

    function slideLeft() {
        var slider = document.getElementById('slider');
        slider.scrollLeft -= 352;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft += 352;
    }

    return (
        <section id='protfolio'>
            <div className='container slider_container'>
                <div className='slider' id='slider'>
                    {
                        Projects.map((project) => {
                            return <ProjectCard key={project.id} img={project.img} title={project.title} tags={project.tags} content={project.content} />
                        })
                    }
                </div>
                <AiOutlineArrowLeft className='pointer_left' onClick={slideLeft} />
                <AiOutlineArrowRight className='pointer_right' onClick={slideRight} />
            </div>

        </section>
    )
}

export default Protfolio