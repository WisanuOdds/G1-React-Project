import { Link } from "react-router-dom";

const NavBar =() => {
    return (
        <div className="NavBar">
        <Link to="/">
            <button className="buttonNavbar">Go to Homepage</button>
        </Link>
        <Link to="/todo">
            <button className="buttonNavbar">Go to App</button>
        </Link>
        </div>
    )
}

export default NavBar;