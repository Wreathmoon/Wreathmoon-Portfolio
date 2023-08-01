import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BiLogoLinkedinSquare } from 'react-icons/bi'

const SocialButton = () => {
    return (
        <div className='header_socialbutton'>
            <a href="https://github.com/Wreathmoon?tab=repositories" rel="noreferrer" target="_blank">
                <BsGithub />
            </a>
            <a href='https://www.linkedin.com/in/luohao-xu-b3744b216/' rel="noreferrer" target="_blank">
                <BiLogoLinkedinSquare />
            </a>
        </div>
    )
}

export default SocialButton