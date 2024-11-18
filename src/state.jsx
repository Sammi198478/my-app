import { useState } from "react";

function MyState(){
    const [myData, setDate] = useState(0);
    const DateChange = () => {
        setDate(myData + 1)
    }
    return(
        <>
        <p>{myData}</p>
        <button onClick={DateChange}>count</button>

        </>
    )
}

export default MyState;