"use client";
import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import { useState } from "react";

const Header = () => {

  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () =>{
    setisClick(!isClick)
  }
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
        <button className="btn"><a href="#">Get Started</a></button>
            <div className="slide" onclick="slide()">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
      </nav>
    </>
  );
};

export default Header;
