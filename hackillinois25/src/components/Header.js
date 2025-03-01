import React from 'react';
import logo from '/Users/baobao/Documents/Spring2025/HackIllinois/HackIllinois2025/hackillinois25/src/assets/koi-fish-main.png';  // Ensure path is correct

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <span className="logo-text">MIZU</span>
          <img src={logo} alt="Mizu Brand Logo" style={{ height: '50px' }} />
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </nav>
      </header>
    );
  }

  

export default Header;
