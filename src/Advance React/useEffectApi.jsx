import { useEffect, useState } from "react";


function DataFetching(){
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")

        .then((response)=> response.json())
        .then((data)=> setData(data))
        .catch((error)=> setError(error))
    }, [])
    if(error){
        return <div>Error IS{error.message}</div>
    }
    return(
        <>
        <ul>
            {data.map((post)=>(
                <li key={post.id}>
                    {post.title}</li>
            ))}

        </ul>
        
        </>
    )
}

export default DataFetching;