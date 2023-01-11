import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link className="navbar_link" to="/">Home</Link>
                <Link className="navbar_link" to="/about">About</Link>
            </div>
        </nav>
    );
}

export default NavBar;
