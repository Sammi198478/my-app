function MyDate(){
    const Time = new Date();
    return(
        <>
        <h3>local date & time</h3>
        <p>{Time.toLocaleDateString()}</p>
        </>
    )
}
export default MyDate;