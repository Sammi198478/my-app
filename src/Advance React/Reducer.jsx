import React, {useReducer} from "react";

function reducer(state, action){
    switch(action.type){
        case "Increment" :
            return{count: state.count + 1}

        case "Decrement" :
            return{count: state.count - 1}

            default:
                throw new Error("The unknown Action")
    }
}
function Counter(){
    const[state, dispatch] = useReducer(reducer, {count : 0});

    const Increment = ()=>{
        dispatch({type: "Increment"})
    }
    const Decrement = ()=>{
        dispatch({type: "Decrement"})
    }
    return(
        <>
        <p>count:{state.count}</p>
    
        <button onClick={Increment}className="btn btn-primary m-2 p-2">Increment</button>
        <button onClick={Decrement } className="btn btn-danger m-2 p-2">Decrement </button>
        
        </>
    )
}

export default Counter;