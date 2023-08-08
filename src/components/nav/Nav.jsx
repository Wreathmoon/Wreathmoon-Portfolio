import React, { useState } from 'react'
import "./nav.css"
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { GoProject } from 'react-icons/go'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'


function Nav() {

    const [activeButton, setActiveButton] = useState('#');
    const [ptDir, setPtDir] = useState('left');

    function HandleClick() {
        setPtDir((prev) => (
            prev === 'left' ? 'right' : 'left'
        ))
    }

    function GetPtIcon(props) {
        return (
            props === 'left' ? <AiOutlineRight className='right' />
                : <AiOutlineLeft className='left' />
        )
    }

    return (
        <nav className={ptDir === 'left' ? 'about_text_left' : 'about_text_right'}>
            <div className='content'>
                <a href='#' id='#' onClick={() => setActiveButton('#')} className={activeButton === '#' ? 'active' : ' '}>
                    <span><BiHome className='nav_icon' /></span>
                    <span className='text'>Home</span>
                </a>
                <a href='#about' id='#about' onClick={() => setActiveButton('#about')} className={activeButton === '#about' ? 'active' : ' '}>
                    <span><BiUser className='nav_icon' /></span>
                    <span className='text'>About</span>
                </a>
                <a href='#protfolio' id='#protfolio' onClick={() => setActiveButton('#protfolio')} className={activeButton === '#protfolio' ? 'active' : ' '}>
                    <span><GoProject className='nav_icon' /></span>
                    <span className='text'>Protfolio</span>
                </a>
                <a href='#contact' id='#contact' onClick={() => setActiveButton('#contact')} className={activeButton === '#contact' ? 'active' : ' '}>
                    <span><BsFillChatDotsFill className='nav_icon' /></span>
                    <span className='text'>Contact</span>
                </a>
            </div>
            <div onClick={HandleClick} className='toggle'>{GetPtIcon(ptDir)}</div>
        </nav >
    )
}

export default Nav