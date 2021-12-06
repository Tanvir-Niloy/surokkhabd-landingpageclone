import React from "react";
import "./style.css";
import Logo from "../images/surokkhalogo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="surokkha" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler9"
          aria-controls="navbarToggler9"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler9">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " href="#">
                হোম
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                নিবন্ধন (জন্ম সনদ)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                নিবন্ধন (পাসপোর্ট)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                টিকা কার্ড
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                টিকা সনদ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                টিকা সনদ যাচাই
              </a>
            </li>
            <button className="nav-btn">English</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
