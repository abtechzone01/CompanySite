"use client";
import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [isMobile, setisMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar-brand">
          <Image
            src="/images/abtzlogo.png"
            className="brand"
            width={170}
            height={60}
            alt="Abtechzone"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/objectives">Objectives</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="btn">
          <a href="#">Get Started</a>
        </button>
        <div className="slide" onClick={() => setisMobile(!isMobile)}>
          <i>
            {isMobile ? (
              <>
                <CloseIcon style={{ height: "40px" }} className="burger" />
              </>
            ) : (
              <>
                <MenuIcon style={{ height: "40px" }} className="burger" />
              </>
            )}
          </i>
        </div>
        {isMobile && (
          <>
            <ul className="mobile-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/objectives">Objectives</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
