import { useState, useCallback } from "react";

function MyCounter(){
    const[count, setCount] = useState(0);


    const Increment = useCallback(()=>{
        setCount((preData)=> preData + 1)
    },[])
    const Decrement = useCallback(()=>{
        setCount((preData)=> preData - 1)
    },[])

    return(
        <>
        <p>count:{count}</p>
    
        <button onClick={Increment}className="btn btn-primary m-2 p-2">Increment</button>
        <button onClick={Decrement } className="btn btn-danger m-2 p-2">Decrement </button>
        
        </>
    )
}

export default  MyCounter;