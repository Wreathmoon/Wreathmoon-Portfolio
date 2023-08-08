import React, { useState } from 'react'
import { DarkModeToggle } from "react-dark-mode-toggle-2";

function DarkModeButton(){
    const [isDarkMode, setIsDarkMode] = useState(true);

    document.querySelector('body').setAttribute("data-theme", isDarkMode===true?'dark':'light');

    function toggleDarkMode(){
        isDarkMode === true ? setIsDarkMode(false) : setIsDarkMode(true);
        document.querySelector('body').setAttribute("data-theme", isDarkMode===true?'dark':'light');
    };

    let windowSize = window.matchMedia("(max-width: 1024px)");
    if (windowSize.matches){
        return (
            <DarkModeToggle isDarkMode={isDarkMode} size={40} onChange={toggleDarkMode}  speed={2} />
        )
    }
    else {
        return (
        <DarkModeToggle isDarkMode={isDarkMode} size={50} onChange={toggleDarkMode}  speed={2} />
        )
    }
}

export default DarkModeButton