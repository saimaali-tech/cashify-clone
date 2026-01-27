'use client';
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import Button from '@mui/material/Button';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { Container } from '@mui/material'; // ← Add this import
import MegaDropdown from "../MegaDropdown";

export default function Navbar() {
  return (
    <header className="header">
      {/* Constrain the main navbar content to match other sections (e.g., xl = ~1536px max) */}
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src="/image563.jpg"
              alt="Logo"
              width={100}
              height={50}
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

          {/* Region / Location */}
          <div className="region">
            <LocationOnSharpIcon style={{ color: 'green' }} />
            <span className="region-text">Gurgaon</span>
          </div>

          {/* Login Button */}
          <Button variant="outlined">Login</Button>
        </nav>
      </Container>

      {/* MegaDropdown placed outside Container so it can span full width if needed (common for mega menus) */}
      <MegaDropdown />
    </header>
  );
}