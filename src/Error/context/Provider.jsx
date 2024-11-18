import React, { children, useState } from "react";
import ThemeContext from "./ContextApi";

function ThemeProvider({children}){
    const[theme, setTheme] = useState("light");

    const ToggleTheme = ()=>{
        setTheme((prevTheme) =>(prevTheme === "light" ? "dark" : "light"));
    }
    return(
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;