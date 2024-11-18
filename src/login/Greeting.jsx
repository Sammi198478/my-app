function Greetings({IsLogin}){
    if(IsLogin){
        return(
            <h1>Welcome Back Eshan</h1>
        )
    }else{
        return <h1>Please Login First</h1>
    }
}


export default Greetings;