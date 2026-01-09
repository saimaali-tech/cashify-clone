"use client"; // required if you use useState, useEffect, or click events

import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">MyApp</h1>

        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
