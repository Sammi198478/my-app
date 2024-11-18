function StudentInfo({username, number, address, role}){
    return(
        <>
        <h2>{username}</h2>
        <p> phone number:{number}</p>
        <p>{address}</p>
        <p>{role}</p>
        </>
    )
}

export default StudentInfo;