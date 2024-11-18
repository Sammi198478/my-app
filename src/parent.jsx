import  Child from './child';


function Parents(){
    const MyParent =()=>{
        alert("you have clicked the button")
    }
    return(
        <>
        <h3>Parents Components</h3>
        <Child MyFun={MyParent}/>
        </>
    )
}

export default  Parents;