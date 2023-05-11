import { GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css";
import { images } from "../../constants/index";
import { react, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showCloseIcon, toggleShowCloseIcon] = useState(false);
  return (
    <header className={`app__header ${toggle && "mobile-only slide-bottom"}`}>
      <a
        className={
          toggle ? "app__header--logo mobile-only" : "app__header--logo"
        }
        href="."
      >
        <img src={images.gericht} alt="logo" />
      </a>
      <nav className={`app__header--nav ${toggle && "mobile-only"}`}>
        <ul className={`app__header--menu ${toggle && "mobile-only"}`}>
          <li className="app__header--under-line">
            <a href="#home">Home</a>
          </li>
          <li className="app__header--under-line">
            <a href="#about">About</a>
          </li>
          <li className="app__header--under-line">
            <a href="#menu">Menu</a>
          </li>
          <li className="app__header--under-line">
            <a href="#awards">Awards</a>
          </li>
          <li className="app__header--under-line">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className={`app__header--book-table-btn ${toggle && "mobile-only"}`}
      >
        <a href="#book-table">Book a table</a>
      </button>
      <button
        className="mobile-only-menu"
        onClick={() => {
          setToggle(!toggle);
          toggleShowCloseIcon(!showCloseIcon);
        }}
      >
        {!toggle && !showCloseIcon ? (
          <GiHamburgerMenu fontSize={27} color="#fff" />
        ) : (
          <img src={images.logo} />
        )}
      </button>
    </header>
  );
};

export default Navbar;
