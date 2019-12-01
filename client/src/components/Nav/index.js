// ------ Dependencies ------
import React from "react";
import "./style.css";

// ------ Nav ------
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <i class="fas fa-laptop-medical fa-2x"></i>
        &nbsp;
        Virtual Hospital
      </a>
    </nav>
  );
}

// ------ Export ------
export default Nav;
