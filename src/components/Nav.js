import React from "react";
import logo from "../assets/icons/logo.svg" 

export default function Nav() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar_main flex__class">
          <a href="/"><img src={logo} alt="Logo" /></a>
          <ul className="nav_main flex__class">
            <li className="nav_items">
              <a href="/">About</a>
            </li>
            <li className="nav_items">
              <a href="/">Careers</a>
            </li>
            <li className="nav_items">
              <a href="/">Events</a>
            </li>
            <li className="nav_items">
              <a href="/">Products</a>
            </li>
            <li className="nav_items">
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
