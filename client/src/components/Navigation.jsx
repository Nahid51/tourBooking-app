import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">tourbooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;