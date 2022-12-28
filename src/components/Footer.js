import React from "react";
import logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <footer>
      <nav className="navbar">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav_main flex__class social_icons">
          <li className="nav_items">
            <a href="/">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className="nav_items">
            <a href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="nav_items">
            <a href="/">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </li>
          <li className="nav_items">
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
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
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </nav>
    </footer>
  );
}
