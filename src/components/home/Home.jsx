import React from 'react'
import CVButton from "./CVButton"
import "./home.css"

function Home() {
    return (
        <section className='home'>
            <div className='home_container'>
                <h5>Hello I'm</h5>
                <h1>Wreathmoon</h1>
                
                <CVButton />
            </div>
        </section>
    )
}

export default Home
