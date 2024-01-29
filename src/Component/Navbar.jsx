import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Css/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="rightSide">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/register"> Survey </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
                <button onClick={toggleNavbar}>
                </button>
            </div>
        </div>
    );
}

export default Navbar;