import React from "react";
import "./style.css";
import  { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar bg-dark height-70px col-12">
            <span className="navbar-brand mb-0 name">Jonathon Condon</span>

            <div className="justify-content-end">
                <Link to="/contact" type="button" className="border">Contact</Link>
                <Link to="/portfolio" type="button" className="border">Portfolio</Link>
                <Link to="/" type="button" className="border">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;