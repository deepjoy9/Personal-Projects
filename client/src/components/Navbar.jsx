import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h3>My Personal Projects</h3>
        <div className="menu-icons" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span>&#10006;</span> // Cross icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </div>
        <ul
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
