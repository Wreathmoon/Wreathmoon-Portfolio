import React, { useState } from 'react'

import { DarkModeToggle } from "react-dark-mode-toggle-2";

function DarkModeButton(){
    const [isDarkMode, setIsDarkMode] = useState(true);

    document.querySelector('body').setAttribute("data-theme", isDarkMode===true?'dark':'light');

    function toggleDarkMode(){
        isDarkMode === true ? setIsDarkMode(false) : setIsDarkMode(true);
        document.querySelector('body').setAttribute("data-theme", isDarkMode===true?'dark':'light');
    };

    return (
        <DarkModeToggle isDarkMode={isDarkMode} onChange={toggleDarkMode} size={80} speed={2} />
  )
}

export default DarkModeButton