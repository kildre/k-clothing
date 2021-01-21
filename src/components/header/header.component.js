import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crownKB.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {"Sign Out".toUpperCase()}
        </div>
      ) : (
        <Link className="option" to="/signin">
          {"Sign In".toUpperCase()}
        </Link>
      )}
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
