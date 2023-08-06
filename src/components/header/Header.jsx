import React, { useRef } from 'react'
import SocialButton from "./SocialButton"
import DarkModeButton from "./DarkModeButton"
import { LiaTimesSolid } from "react-icons/lia"
import { LiaBarsSolid } from "react-icons/lia"

import "./header.css"

function Header() {
    const navRef = useRef();

    function showBar(){
        navRef.current.classList.toggle("responsive_navbar");
    }

    return (
        <section className='header'>
            <header className='container header_container'>  
                <div>
                    <DarkModeButton />
                    <SocialButton />
                    <LiaTimesSolid onClick={showBar}/>
                </div>
                <LiaBarsSolid onClick={showBar}/>
            </header>
        </section>
    )
}

export default Header