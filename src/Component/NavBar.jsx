import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div id="navbar">
      <div id="navName">Bhushan</div>
      <ul id="navList">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
      <ul id="navListIcon">
        <li>
          <AiFillFacebook />
        </li>
        <li>
          <AiFillLinkedin />
        </li>
        <li>
          <AiFillGithub />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
