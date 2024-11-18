function ContactCard({name, des}){
    return(
        <>
        <div>
            <h1> {name}</h1>
            <p>{des}</p>
            <button>contact me</button>
        </div>
        </>
    )
}


export default ContactCard;