// Header.js

import React from 'react';
import '../styles/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <nav>
      <h1 className="header-title">Connor Van Etten</h1>
      <ul className="header-tags">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Tools</a>
        </li>
        <li>
          <a href="#">Collaborate</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
