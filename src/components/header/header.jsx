import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

const Header = () =>{
    return (
        <header>
            <h1>
                <Link className="logo" to={"/"}>StarDB</Link>
            </h1>
            <div className="nav">
            <NavLink className="NavLink" to={"/planets"}>Planets</NavLink>
            <NavLink className="NavLink" to={"/people"}>People</NavLink>
            <NavLink className="NavLink" to={"/starships"}>Starships</NavLink>
            </div>
        </header>
    );
};
export default Header;