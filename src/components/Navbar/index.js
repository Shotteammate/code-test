import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

const Navbar = () => {
  const navigationLinks = [
    { id: 1, name: "About" },
    { id: 2, name: "Contact Us" },
  ];
  return (
    <div className="navbar-container">
      <div className="navbar">
        <HomeIcon className="logo" />
        <nav>
          <ul>
            {navigationLinks.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
