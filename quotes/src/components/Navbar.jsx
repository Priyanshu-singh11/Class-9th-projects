import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="header">
        <h1><Link to="/" className="logo"> Quotes</Link></h1>
        <div className="dropdown" id="dropdown">
          <p className="icon" id="hamburg" onClick={toggleDropdown}>
            <i className="fas fa-bars"></i>
          </p>
          <div className={isDropdownOpen ? "dropdown-content showDropdown" : "dropdown-content"} id="dropdown-content" onClick={toggleDropdown}>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/authors">
              <i className="fas fa-pen-nib"></i> Authors
            </Link>
            <Link to="/tags">
              <i className="fas fa-tag"></i> Tags
            </Link>
            <Link to="/random">
              <i className="fas fa-random"></i> Random
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

/*
.title-tags {
    max-width: 868px;
    font-weight: 300;
    text-align: center;
}
*/
