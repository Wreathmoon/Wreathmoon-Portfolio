import React from 'react'
import CV from '../../assets/CV_LuohaoXu_202307.pdf'

const CVButton = () => {
    return (
        <div className='header_cvbutton'>
            <a href={CV} className='btn' download>View CV</a>
            <a href='#contact' className='btn btn-variant'>Let's Talk</a>
        </div>
    )
}

export default CVButton