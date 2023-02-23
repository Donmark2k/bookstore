import { Link } from 'react-router-dom';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

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
    <span className="profile">
        <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
        />
      </span>
  </nav>
);

export default NavBar;
