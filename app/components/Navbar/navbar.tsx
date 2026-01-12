"use client";

import Image from "next/image";  
import Link from "next/link";
import "./navbar.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/image563.jpg" 
            alt="Logo"
            width={90}
            height={40}
            priority
          />
        </Link>

             {/* Search Bar */}
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for mobiles , accessories "
            className="search-input"
          />
        </div>
         <div className="region">
       
         <span className="region-text">Gurgaon</span>
        </div>


      


    </nav>
    </header>
  );
}
