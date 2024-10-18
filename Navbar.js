import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`navbar ${isActive ? "active" : ""}`}>
            <h1>Muteza</h1>
            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
            <ul>
                <li>Product</li>
                <li>How it Works</li>
                <li>Review</li>
            </ul>
            <h2>Get Start</h2>
        </nav>
    );
};

export default Navbar;
