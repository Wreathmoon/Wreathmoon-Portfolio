import React, { useState } from 'react'

import DarkModeToggle from "react-dark-mode-toggle";

function DarkModeButton(){
    const [isDarkMode, setIsDarkMode] = useState(true);

    document.querySelector('body').setAttribute("data-theme", isDarkMode===true?'dark':'light');

    function switchTheme(){
        isDarkMode === true ? setIsDarkMode(false) : setIsDarkMode(true);
        document.querySelector('body').setAttribute("data-theme", isDarkMode===true?'dark':'light');
    }

    return (
        <DarkModeToggle checked={isDarkMode} onChange={setIsDarkMode} size={80} speed={2} />
  )
}

export default DarkModeButton