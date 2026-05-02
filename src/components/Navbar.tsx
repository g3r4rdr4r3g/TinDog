import { useState } from "react";
import type { NavLink } from "../types";
import navData from "../data/navigation.json";

const navLinks: NavLink[] = navData.navLinks;

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#title">
        tindog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse${expanded ? " show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.id}>
              <a
                className="nav-link"
                href={link.href}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
