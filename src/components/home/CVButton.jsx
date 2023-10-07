import React from 'react'
import CV from '../../assets/CV_LuohaoXu_202310.pdf'
import { BiDownload } from "react-icons/bi"
import { BsFillChatDotsFill } from "react-icons/bs"

const CVButton = () => {
    return (
        <div className='homeCvButtons'>
            <a href={CV} className='btn btn-variant' download target='_blank'>
                <span className='text'>View CV</span>
                <span className='icon'><BiDownload /></span>
            </a>
            <a href='#contact' className='btn'>
                <span className='text'>Let's Talk</span>
                <span className='icon'><BsFillChatDotsFill /></span>
            </a>
        </div>
    )
}

export default CVButton