import React from "react";

import "./Navbar.css";
import { images } from "../../constants/index";

const Navbar = () => (
  <header className="app__header">
    <a href=".">
      <img src={images.gericht} alt="logo" />
    </a>
    <nav className="app__header--nav">
      <ul className="app__header--menu">
        <li>
          <a className="app__header--under-line" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="app__header--under-line" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="app__header--under-line" href="#menu">
            Menu
          </a>
        </li>
        <li>
          <a className="app__header--under-line" href="#awards">
            Awards
          </a>
        </li>
        <li>
          <a className="app__header--under-line" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <button className="app__header--book-table-btn">
      <a className="app__header--under-line" href="#book-table">
        Book a table
      </a>
    </button>
  </header>
);

export default Navbar;
