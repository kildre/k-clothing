import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crownKB.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" width={"120px"} height={"120px"} />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        {"shop".toUpperCase()}
      </Link>
      <Link className="option" to="/contact">
        {"contact".toUpperCase()}
      </Link>
      <Link className="option" to="/cart">
        {"cart".toUpperCase()}
      </Link>
    </div>
    <div className="attribute">
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </div>
);
export default Header;
