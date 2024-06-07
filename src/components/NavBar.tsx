const NavBar =() => {
    return (
        <div className="NavBar">
        <a href="/">
            <button className="buttonNavbar">Go to Homepage</button>
        </a>
        <a  href="/todo">
            <button className="buttonNavbar">Go to App</button>
        </a>
        </div>
    )
}

export default NavBar;