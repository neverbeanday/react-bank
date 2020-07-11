import React from "react";
import logo from '../assets/logo-white.svg';
import { useHistory } from 'react-router-dom'; 
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const history = useHistory();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-sosial-media">
          <img src={logo} className="footer-content-sosial-media-logo" alt="logo" />
          <div className="footer-content-sosial-media-list">
            <a href="https://www.facebook.com/ahmadarifsaputra/">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/ahmadarifs/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/ahmad_arifs/">
              <FaInstagram />
            </a>
          </div>
        </div>
        <ul className="footer-content-menu">
          <li onClick={() => history.push('/convertion')} style={{cursor: "pointer"}}>Convertion</li>
          <li onClick={() => history.push('/contact')} style={{cursor: "pointer"}}>Contact</li>
          <li onClick={() => history.push('/about')} style={{cursor: "pointer"}}>About Us</li> {/*Penggunaan Hook History*/}
        </ul>
      </div>

      <p className="footer-copyright">Copyright © 2020 ahmad_arifs</p>
    </footer>
  );
}
