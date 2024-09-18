import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '15px' }}>
            <a href="#home">Home</a>
          </li>
          <li style={{ display: 'inline', marginRight: '15px' }}>
            <a href="#about">About</a>
          </li>
          <li style={{ display: 'inline', marginRight: '15px' }}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
