import React, { useState } from 'react'



function DarkModeButton(){
    const [theme, setTheme] = useState("dark");
    document.querySelector('body').setAttribute("data-theme", theme);

    function switchTheme(){
        theme === "dark" ? setTheme("light") : setTheme("dark");
        document.querySelector('body').setAttribute("data-theme", theme);
    }

    return (
        <button onClick={switchTheme} id="theme-button" className='btn btn-variant'>Change Theme</button>
  )
}

export default DarkModeButton