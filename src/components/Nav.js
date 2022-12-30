import React, { useState, useEffect } from "react";
import logo from "../assets/icons/logo.svg";

export default function Nav() {
  const [mobile, setMobile] = useState(false);

  const handleClick = () => {
    setMobile(!mobile);
  };

  const [offset, setOffset] = React.useState(0);
  const setScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <>
      <section className="heroSection" data-scroll-section>
        <header>
          <nav className="navbar">
            <button
              className={`nav_open ${mobile ? "active" : ""}`}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className={`navbar_main flex__class ${mobile ? "active" : ""}`}
            >
              <a href="/#" className={`${offset > 50 ? "active" : ""}`}>
                <img src={logo} alt="Logo" />
              </a>
              <ul className={`nav_main flex__class ${mobile ? "active" : ""}`}>
                <li className="nav_items">
                  <a href="/#">About</a>
                </li>
                <li className="nav_items">
                  <a href="/#">Careers</a>
                </li>
                <li className="nav_items">
                  <a href="/#">Events</a>
                </li>
                <li className="nav_items">
                  <a href="/#">Products</a>
                </li>
                <li className="nav_items">
                  <a href="/#">Support</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="main_hero ff-head fw-300">
          <span>Immersive</span>
          <span>experiences</span>
          <span>that deliver</span>
        </div>
      </section>
    </>
  );
}
