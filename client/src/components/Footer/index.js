// ------ Dependencies ------
import React from "react";
import styles from "./style.css";

// ------ Nav ------
function Footer() {
  return (
    <div className={styles.myFooter}>
      <a href="https://github.com/zhaokevinma/project3" target="_blank"  rel="noopener noreferrer">
        <i className="fab fa-github"></i>
        &nbsp;
        Github Repo
      </a>
    </div>
  );
}

// ------ Export ------
export default Footer;
