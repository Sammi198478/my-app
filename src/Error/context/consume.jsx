import React, {useContext} from "react";
import ThemeContext from "./ContextApi";


function ThemeToggler(){
    const{theme, ToggleTheme} = useContext(ThemeContext);


    return(
      <div style={{backgroundColor: theme === "light" ? "red" : "black"}}>
        <p>The current Theme is {theme}</p>
        <button onClick={ToggleTheme}>
            {theme === "light" ? "dark" : "light"}

        </button>
      
      
      </div>
    )
}

export default ThemeToggler;