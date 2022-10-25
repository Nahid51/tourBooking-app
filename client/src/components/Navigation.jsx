import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/">
                    <span className="logo">tourbooking</span>
                </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;