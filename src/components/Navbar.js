import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MenuNav from "./MenuNav";

import logo from "../assets/logo.svg";
import navLogo from "../assets/nav.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    function activateNav() {
      let scrollPosition = window.pageYOffset;
      if (scrollPosition > 100) {
        setNav(true);
      } else if (scrollPosition < 10) {
        setNav(false);
      }
    }
    window.addEventListener("scroll", activateNav);
  });

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav className={`navbar ${nav && "navbar-active"}`}>
      <div className="container">
        <img className="brand" src={logo} alt="Nansen logo" />
        <MenuNav menuOpen={menuOpen} />
        <div className="menu-btn">
          <img onClick={menuToggle} src={navLogo} alt="navigation" />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  transition: 0.3s ease-in-out;
  z-index: 2;
  .container {
    max-width: none;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
    padding-left: 40px;
    @media screen and (max-width: 991px) {
      padding-right: 20px;
      padding-left: 20px;
    }
    .brand {
      font-size: 1.5em;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .menu-btn {
      cursor: pointer;
      font-size: 1.3em;
      display: none;
      transition: 0.3s;
      &:hover {
        color: #b2b2b2;
      }
      @media screen and (max-width: 991px) {
        display: block;
      }
    }
    .menu-open {
      height: 100%;
      overflow: hidden;
      z-index: 500;
      position: fixed;
      background-color: var(--background);
    }
  }
`;
