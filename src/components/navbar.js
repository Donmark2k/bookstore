import { Link } from 'react-router-dom';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => (
  <nav>

    <ul className="navbar">
      <h1> Bookstore CMS</h1>

      <li>
        <Link to="/bookList">BOOK</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>

    </ul>
    <span className="profile">
      <FaUserAlt />
    </span>
  </nav>
);

export default NavBar;
