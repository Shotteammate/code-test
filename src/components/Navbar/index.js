import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

const Navbar = () => {
  const navigationLinks = ["About", "Contact Us"];
  return (
    <div className="container">
      <div className="navbar">
        <HomeIcon className="logo" />
        <nav>
          <ul>
            {navigationLinks.map((link) => (
              <li>{link}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
