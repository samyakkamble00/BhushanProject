import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  const array = [
    { id: 1, btn: "Movie Website" },
    { id: 2, btn: "Eco Website" },
    { id: 3, btn: "VideoCalling Website" },
    { id: 4, btn: "Pixaby Website" },
    { id: 5, btn: "Contact Website" },
    { id: 6, btn: "Weather Website" },
    { id: 7, btn: "Piano Website" },
  ];
  return (
    <div id="footer">
      <div>
        <h1>GET IN TOUCH</h1>
        <p>demo@gmail.com</p>
        <p>+911234567890</p>
      </div>
      <div id="btn">
        {array.map(({ id, btn }) => (
          <button key={id} id="btn1" className="btn-button">
            {btn}
          </button>
        ))}
      </div>
      <div>
        <ul id="footerListIcon">
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
    </div>
  );
};

export default Footer;
