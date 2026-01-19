'use client'; // Optional: If using App Router and need any client-side JS (not required here)

import React from 'react';
import './MegaDropdown.css'; // Import the CSS (create this file next)

const MegaDropdown = () => {
  return (
    <nav className="mega-nav">
      <ul className="mega-nav-list">
        {[...Array(8)].map((_, index) => (
          <li key={index} className="mega-nav-item">
            <a href="#" className="mega-nav-trigger">
              Dropdown {index + 1}
            </a>
            <div className="mega-dropdown-content">
              {/* Example mega content: Grid with columns */}
              <div className="mega-grid">
                <div className="mega-column">
                  <h3>Section 1</h3>
                  <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                  </ul>
                </div>
                <div className="mega-column">
                  <h3>Section 2</h3>
                  <ul>
                    <li><a href="#">Link A</a></li>
                    <li><a href="#">Link B</a></li>
                    <li><a href="#">Link C</a></li>
                  </ul>
                </div>
                <div className="mega-column">
                  <h3>Section 3</h3>
                  <p>Some descriptive text or image here.</p>
                  {/* Optional: Add images with next/image */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaDropdown;