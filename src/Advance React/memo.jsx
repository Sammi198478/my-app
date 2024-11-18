import React, {memo, useState} from "react";

const Child = memo(({Count}) =>{
    console.log("child component is rendering")
    return <p>count: {Count} </p>
})

const Parent = ()=>{
    const[Count, setCount] = useState(0)
    const[name, setName] = useState("")
    console.log("parent is Rendering")
    const CountHandle = ()=>{
        setCount(Count + 1)

    }
    return(
        <>
        <div>
            <Child count={Count} />
            <button className="btn bg-indigo-500" onClick={CountHandle}>Increment</button>
            <p>name: {name}</p>
            <input className="border border-danger-subtle" type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>

        </div>
        
        </>
    )
}

export default Parent;