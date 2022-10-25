import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/navigation.css";

const Navigation = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/">
                    <span className="logo">tourbooking</span>
                </Link>
                {user ? `Signed in as: ${user.username}` : <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>}
            </div>
        </div>
    );
};

export default Navigation;