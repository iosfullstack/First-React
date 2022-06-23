import React from "react";
import ReactLogo from "../components/images/icons8-react-native-144.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
        <nav>
            <img src={ReactLogo} alt="React Logo" className="img-logo" />
            <h1 className="nav-title">ReactsFacts</h1>
            <h4 className="nav-sub-title">My First React Project-1</h4>
        </nav>
        </div>
    );
}

export default Navbar;