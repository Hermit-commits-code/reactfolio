import React from "react";
import "./styles/Header.scss";
import { Close, MenuBookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const menuShow = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <h1>Reactfolio</h1>
      </div>
      <nav>
        <ul>
          <div className="closed" onClick={menuShow}>
            <Close className="close" />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="change">
        <MenuBookOutlined className="menu" />
      </div>
    </div>
  );
};

export default Header;
