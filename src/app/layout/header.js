"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Contact from "../contact/page";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "60rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isMobile, setisMobile] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Contact setOpen={setOpen} />
        </Box>
      </Modal>
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
            <Link href="/ourwork">Our Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="/#" onClick={() => handleOpen()}>
          <button className="btn">Get Started</button>
        </Link>

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
              <li onClick={() => setisMobile(!isMobile)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setisMobile(!isMobile)}>
                <Link href="/about">About</Link>
              </li>
              <li onClick={() => setisMobile(!isMobile)}>
                <Link href="/objectives">Objectives</Link>
              </li>
              <li onClick={() => setisMobile(!isMobile)}>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link onClick={() => setisMobile(!isMobile)} href="/ourwork">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li
                onClick={() => {
                  setOpen(true);
                  setisMobile(!isMobile);
                }}
              >
                <button className="btn10">Get Started</button>
              </li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
