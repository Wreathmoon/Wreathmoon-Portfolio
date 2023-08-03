import React from 'react'
import './footer.css'
import { AiOutlineGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"

function Footer() {
    return (
        <footer class="footer">
            <div className='footer_socials'>
                <a href="https://github.com/Wreathmoon?tab=repositories" target='_blank'><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/luohao-xu-b3744b216/" target='_blank'><FaLinkedin /></a>
                <a href="https://www.youtube.com/channel/UCZAk4arSmuJ792qveNd_aMQ" target='_blank'><BsYoutube /></a>
            </div>

            <ul class="footer_menu">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#protfolio">Protfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='copyright'>
                <small>&copy;2023 Wreathmoon</small>
            </div>
        </footer>
    )
}

export default Footer