import React, { useRef } from 'react'
import DarkModeButton from "./DarkModeButton"
import { LiaTimesSolid } from "react-icons/lia"
import { LiaBarsSolid } from "react-icons/lia"
import { BsGithub } from 'react-icons/bs'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { BsYoutube } from "react-icons/bs"

import "./header.css"

function Header() {
    const navRef = useRef();

    function showBar(){
        navRef.current.classList.toggle("responsive_navbar");
    }

    return (
        <section className='header'>
            <a className='header_logo'>"Logo"</a>
            <div className='header_bar'>
                <DarkModeButton />
                <a href="https://github.com/Wreathmoon?tab=repositories" className="social_button" rel="noreferrer" target="_blank">
                    <BsGithub />
                </a>
                <a href='https://www.linkedin.com/in/luohao-xu-b3744b216/' className="social_button" rel="noreferrer" target="_blank">
                    <BiLogoLinkedinSquare />
                </a>
                <a href="https://www.youtube.com/channel/UCZAk4arSmuJ792qveNd_aMQ" className="social_button" rel="noreferrer" target='_blank'>
                    <BsYoutube />
                </a>
                {/* <LiaTimesSolid onClick={showBar}/> */}
            </div>
            {/* <LiaBarsSolid onClick={showBar}/> */}
        </section>
    )
}

export default Header