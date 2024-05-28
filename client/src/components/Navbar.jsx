import { useState } from "react";

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
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
