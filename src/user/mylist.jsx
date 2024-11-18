function MyList(){
    const user = [
        {
            id: 1,
            name: "Eshan",
            prof: "programmer"
        },
        {
            id: 2,
            name: "Tutul",
            prof: "programmer"
        },
        {
            id: 3,
            name: "Salman",
            prof: "programmer"
        }
    ]
    return(
        <>
        <ul>
         {user.map((MyUsers)=>(
            <li key={MyUsers.id}>
                {MyUsers.id},{MyUsers.name},{MyUsers.prof}
            </li>
         ))
         }
        </ul>

        <button className="btn btn-primary">click me</button>
        </>
    )
}

export default MyList;