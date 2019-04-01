import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Banner from './images/flights.jpeg';
import './style.scss';

const Header = () => (
  <div className="header">
    <a href="https://github.com/kpozdnikin/react-redux-saga-test-app">
      <img src={Banner} alt="react-redux-boilerplate - Logo" />
    </a>
    <div className="nav-bar">
      <Button
        variant="outlined"
        exact
        activeClassName="active"
        component={NavLink}
        to="/"
        className="link-button"
      >
        Home
      </Button>
      <Button
        variant="outlined"
        activeClassName="active"
        component={NavLink}
        to="/features"
        className="link-button"
      >
        Add New Flight
      </Button>
    </div>
  </div>
);

export default Header;
