function UniqueID(){
    const UserList = [
        {
            id: 1,
            name: "Eshan",
            prof: "programmer",
            age: 20,
          
        },
        {
            id: 2,
            name: "Tutul",
            prof: "programmer",
            age: 22
        },
        {
            id: 3,
            name: "Salman",
            prof: "programmer",
            age: 24
        },
        {
            id: 4,
            name: "Eshan",
            prof: "programmer",
            age: 25
        }
    ]
    return(
        <>
        <h2>List of user:</h2>
        <div>
            {UserList.map((person)=>(
                <ul key={person.id}>
                    <li>{person.id}</li>
                    <li>{person.name}</li>
                    <li>{person.prof}</li>
                    <li>{person.age}</li>
                </ul>

            ))}
        </div>
        </>
    )
}

export default UniqueID;