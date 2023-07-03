import React from "react";

const Menu=() =>{
    return(
        <div className="menu-box">
            <div className="logo"></div>
            <ul className="menu-container">
                <li className="acceuil">
                    <a href="#">Acceuil</a>
                    <span></span>
                </li>
                <li>
                    <a href="#">Qui sommes-nous ?</a>
                    <span></span>
                </li>
                <li>
                    <a href="#">Notre équipe</a>
                    <span></span>
                </li>
                <li>
                    <a href="#">Nos projets</a>
                    <span></span>
                </li>
                <li>
                    <a href="#">Contactez-nous</a>
                    <span></span>
                </li>
            </ul>
    </div>
    );
}

export default Menu;