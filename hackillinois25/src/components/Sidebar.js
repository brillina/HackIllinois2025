import React from 'react';
import './Sidebar.css';
import logo from '/Users/baobao/Documents/Spring2025/HackIllinois/HackIllinois2025/hackillinois25/src/assets/koi-fish-main.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
            <span className="logo-text">MIZU</span>
            <img src={logo} alt="Mizu Brand Logo" style={{ height: '50px' }} />
            </div>
            <div className="menu">
                <button className="menu-item">🌩️ Learn</button>
                <button className="menu-item">👑 Progress</button>
                <button className="menu-item">🔓 Profile</button>
            </div>
        </div>
    );
}

export default Sidebar;
