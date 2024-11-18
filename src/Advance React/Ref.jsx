import React, {useRef} from "react";

const MyRef = ()=>{
    const InputRef = useRef(null);
    const ShowValue=()=>{
        alert(InputRef.current.value)
    }
    return(
        <>
        <input type="text" ref={InputRef} placeholder="Enter something..." className="border border-info"/>
        <button className="btn bg-danger p-1 rounded" onClick={ShowValue}>Show Me</button>
        
        </>
    )
}


export default MyRef;