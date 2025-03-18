

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import categories from "../data/categories.json";
import "./Nav.css";

const Navone = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <Link to="/" className="navbar-brand">
        Brandname
      </Link>
      <div className="nav-icons">
        <Link to="/cart">
          <i className="bi bi-cart"></i>
        </Link>
        <Link to="/wishlist">
          <i className="bi bi-heart"></i>
        </Link>
        {user ? (
          <>
            <span>{user}</span>
            <button onClick={handleLogout} className="logout-button bg-danger">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <i className="bi bi-person"></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

const Navtwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="box">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={openCategory === index ? "open" : ""}
            onClick={() => toggleCategory(index)}
          >
            <Link to={`/category/${category.name.toLowerCase()}`}>
              {category.name}
            </Link>
            <ul>
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={`/category/${category.name.toLowerCase()}/subcategory/${subcategory.name
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    {subcategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ImpNav = () => {
  return (
    <div>
      <Navone />
      <Navtwo />
    </div>
  );
};

export default ImpNav;
