import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.scss";
const Navigation = ({title,content,heading}) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="inner">

          <div className="nav-left">{title}</div>
          <div className="nav-right">
            <ul>
              <li className="">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
