import React, {Component } from "react";
import SVG from '../components/Logo.js';

class Header extends Component {

  render() {
    return (
        <header className="App-header">
          <a className="logo-wrapper" href="#top">
            <h4 className="event-date">December 1-4, 2018</h4>
            <SVG fill={ this.props.color } width="100px" height="110px" viewBox="10 10 100 100" />
          </a>

          <a className="App-menu" href="#top">
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </header>
    );
  }
}

export default Header;
