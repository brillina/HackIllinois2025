import React from 'react';

function MenuItem({ icon, label }) {
    return (
        <button className="menu-item">
            <img src={icon} alt={label} className="icon" /> {/* SVG icon */}
            {label}
        </button>
    );
}
