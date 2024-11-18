function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <a href="">Hablu programmer</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavbarID"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="NavbarID">
                    <ul className="navbar-nav ">
                        <li className="nav-link-active">Home</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Contact</li>
                        <li className="nav-link">Signup</li>

                    </ul>
                </div>
                <div>
                   
                </div>

            </div>

        </nav>
        </>
    )
}
export default Navbar;