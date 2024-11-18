import { useState } from "react";
import Greetings from '../login/Greeting'

function Login(){
    const[IsLoggedIn, setLoggedIn] = useState(false)

    return(
        <>

        <button onClick={()=> setLoggedIn (!IsLoggedIn)}>{IsLoggedIn? "Log Out" : "Log In"}</button>


        <Greetings IsLogin = {IsLoggedIn} />

        
        </>
    )
}

export default Login;