import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="contenedor">
        <nav>
          <ul>
            <li><NavLink to="/">Primera</NavLink></li>
            <li><NavLink to="/segunda">Segunda</NavLink></li>
            <li><NavLink to="/tercera">Tercera</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}

export default NavBar;