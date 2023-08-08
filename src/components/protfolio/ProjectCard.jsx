import React from 'react'

function ProjectCard(props) {
    return (

        <div className='project_card'>
            <div className='project_img'>
                <img src={props.img} alt='project_img' />
            </div>
            <div className='project_content'>
                <div className='project_detials'>
                    <h2>{props.title}</h2>
                    <h4>{props.tags}</h4>
                    <h5>{props.content}</h5>
                    <div className='project_buttons'>
                        <a href={props.demo} className='btn' target='_blank'>Demo</a>
                        <a href={props.code} className='btn btn-variant' target='_blank'>Code</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard