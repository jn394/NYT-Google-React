import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <h2 className="navbar-brand">Google Search</h2>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/search" ? "nav-link active" : "nav-link"} >
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} >
                            Saved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;