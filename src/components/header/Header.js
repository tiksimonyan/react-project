import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../.././images/logo.svg";
import Search from "../search/Search";

function Header({ menus, onChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [showMobile, setShowMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    onChange(query);
  };

  const handleMobileMenu = () => {
    setShowMobile(!showMobile);
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${showMobile ? "active" : ""}`}>
      <div className="top_bar">
        <span className="hamburger" onClick={handleMobileMenu}>&#9776;</span>
        <img src={logo} alt="Logo" className="logo" />
        <span className="close" onClick={handleMobileMenu}>&#x2716;</span>
        <Search onChange={handleSearchChange} />
      </div>
      <nav>
        <ul className={`menus ${showMobile ? "active" : "hidden"}`}>
          {menus.map((menu, index) => (
            <li key={index}>
              <a href="#">
                {menu.name}{" "}
                {menu.submenus && <span className="arrow">&#9013;</span>}
              </a>
              <div className="dropdown">
                {menu.submenus && menu.submenus.length > 0 && (
                  <ul>
                    {menu.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        {submenu} <span className="arrow">&#8250;</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
