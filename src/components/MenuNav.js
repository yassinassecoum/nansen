import React from "react";
import styled from "styled-components";

function MenuNav({ menuOpen }) {
  return (
    <Wrap className={`menu ${menuOpen && "menu-open"}`}>
      <li className="menu-item">
        <a href="/">Pricing</a>
      </li>
      <li className="menu-item">
        <a href="/">Ressources</a>
      </li>
      <li className="menu-item">
        <a href="/"> Research Portal </a>
      </li>
      <li className="menu-item">
        <a href="/"> Nansen Alpha </a>
      </li>
      <li className="menu-item">
        <a href="/"> Institutions </a>
      </li>
      <li className="menu-item">
        <a href="/"> About us </a>
      </li>
      <li className="menu-item-btn ghost">
        <a href="/"> Sign in </a>
      </li>
    </Wrap>
  );
}

export default MenuNav;

const Wrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3em;
  transition: 0.4s ease-in-out;
  margin-left: auto;
  @media screen and (max-width: 991px) {
    position: absolute;
    top: 67px;
    left: 0;
    width: 100%;
    height: 0em;
    background: #222;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: hidden;
    margin-top: 100px;
  }
  .menu-item {
    margin-right: 6px;
    margin-left: 6px;
    padding: 9px 0;
    a {
      font-size: 17px;
      line-height: 1.2;
      font-weight: 700;
      text-decoration: none;
      color: #fff !important;
      transition: 0.3s;
      &:hover {
        color: var(--flash-green) !important;
      }
    }
  }
  .menu-item-btn {
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    border: 1px solid rgba(211, 219, 226, 0.4);
    border-radius: 2px;
    background-color: transparent;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
  }
`;
