import React from "react";
import "./header.css";

const Header = () =>{
    return (
        <header>
            <h1 className="log">StarDB</h1>
            <div className="nav">
                <a href="#">Planets</a>
                <a href="#">People</a>
                <a href="#">Starships</a>
                <a href="#">About me</a>
            </div>

        </header>
    );
};
export default Header;