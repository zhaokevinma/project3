// ------ Dependencies ------
import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import "./style.css";

const Nav = (props) => {
  let greeting;

  if (props.user === null) {
		greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.firstName}</strong>
			</Fragment>
		)
	} else if (props.user.username) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.username} </strong>
			</Fragment>
		)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Col size="md-2">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-laptop-medical fa-2x"></i>
          &nbsp;
          Virtual Hospital
        </Link>
      </Col>
      <Col size="md-7"></Col>
      <Col size="md-3">
        <div className="float-right">
        {greeting} - <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
        </div>
      </Col>
    </nav>
  )
};


// ------ Export ------
export default Nav;
