import React from 'react'
import CVButton from "./CVButton"
import SocialButton from "./SocialButton"
import "./header.css"

function Header() {
    return (
        <header>
            <section className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Wreathmoon</h1>
                <h5 className='text-light'>Web Developer</h5>
                <CVButton />
                <SocialButton />
            </section>
        </header>
    )
}

export default Header