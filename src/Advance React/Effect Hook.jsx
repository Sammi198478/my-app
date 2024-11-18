import { useState, useEffect } from "react"

function CountDownTimer(){
    const[second, setSecond] = useState(0);

    useEffect(()=>{
        const Timer = setInterval(() => {
            setSecond((preData)=> preData + 1)
        },1000);
        return()=>{
            clearInterval(Timer)
        }
    }, [])
    return <div>Time is {second}</div>
}

export default CountDownTimer;