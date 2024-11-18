import { useState } from "react"


function MyEvent(){
        const[message, setMessage] = useState("Click the Button");

        const HandleClick =()=>{
            setMessage("Button was Clicked")
        }
    return(
        <>
        <h3>{message}</h3>
        <button onClick={HandleClick}>click me</button>
        </>
    )

}

export default MyEvent;