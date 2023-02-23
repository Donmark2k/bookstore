import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <nav>
    <h1> Bookstore CMS</h1>

    <ul>
      <li>
        <Link to="/">BOOK</Link>
      </li>
      <li>|</li>

      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>

    </ul>
  </nav>
);

export default NavBar;
