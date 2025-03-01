import React from 'react';
import './Sidebar.css';
import logo from '/Users/baobao/Documents/Spring2025/HackIllinois/HackIllinois2025/hackillinois25/src/assets/koi-fish-main.png';
import lightningIcon from '/Users/baobao/Documents/Spring2025/HackIllinois/HackIllinois2025/hackillinois25/src/assets/lightning.png';
import crownIcon from '/Users/baobao/Documents/Spring2025/HackIllinois/HackIllinois2025/hackillinois25/src/assets/lightning.png';
import profileIcon from '/Users/baobao/Documents/Spring2025/HackIllinois/HackIllinois2025/hackillinois25/src/assets/profile.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top-bar">  {/* Container for logo and title */}
                <img src={logo} alt="Mizu Logo" className="sidebar-logo" />
                <span className="sidebar-title">MIZU</span>
            </div>
            <div className="menu">
                <button className="menu-item">
                    <img src={lightningIcon} alt="Learn" className="icon" />
                    Learn
                </button>
                <button className="menu-item">
                    <img src={crownIcon} alt="Progress" className="icon" />
                    Progress
                </button>
                <button className="menu-item">
                    <img src={profileIcon} alt="Profile" className="icon" />
                    Profile
                </button>
            </div>
        </div>
    );
}

export default Sidebar;