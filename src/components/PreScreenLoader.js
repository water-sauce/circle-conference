import React, {Component } from "react";
import logo from '../images/logo-text.svg';

class PreScreenLoader extends Component {
  render() {
    return (
        <div className="screen-loader">
          <div>
            <img src={ logo } className="App-logo-loader" alt="logo" />
            <h4 className="event-date">December 1-4, 2018</h4>
          </div>
        </div>
    );
  }
}

export default PreScreenLoader;
