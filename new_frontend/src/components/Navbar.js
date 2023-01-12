import React from "react";
import { Link } from "react-router-dom";
import wit from "./wit.png"

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={wit} className="wit" />

            <div className="links">
                <Link className="navbar_link" to="/">Home</Link>
                <Link className="navbar_link" to="/about">About</Link>
                <Link className="navbar_link" to="/resources">Resources</Link>
            </div>
        </nav>
    );
}

export default NavBar;
