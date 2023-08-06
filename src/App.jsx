import React from 'react'
import Header from "./components/header/Header"
import Home from './components/home/Home'
import About from "./components/about/About"
import Nav from "./components/nav/Nav"
import Protfolio from "./components/protfolio/Protfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"



const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <Nav />
            <About />
            <Protfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App