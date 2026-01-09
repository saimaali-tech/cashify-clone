"use client";

import Image from "next/image";   // ✅ REQUIRED
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/image563.jpg"   // ✅ NO "public"
            alt="MyApp Logo"
            width={90}
            height={40}
            priority
          />
        </Link>
           <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
    </nav>
    </header>
  );
}
