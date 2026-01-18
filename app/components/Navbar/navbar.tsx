"use client";

import Image from "next/image";  
import Link from "next/link";
import "./navbar.css";
import Button from '@mui/material/Button';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import MegaDropdown from "../MegaDropdown"
import Carousel from "../Carousel"


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
          
         <LocationOnSharpIcon></LocationOnSharpIcon>
         <span className="region-text">Gurgaon</span>
        </div>
          <Button variant="outlined">login</Button>
        
       </nav>
       <MegaDropdown></MegaDropdown>
 </header>
    

    
  );
}
