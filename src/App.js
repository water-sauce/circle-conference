import React, { Component } from 'react';
import logo from './images/logo-text.svg';
import square from './images/image-square.jpg';
import circle from './images/image-circle.png';
import down_arrow from './images/Rectangle.png';

import SVG from './components/logo.js';
import RegistrationModal from './components/RegistrationModal.js';

import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          showModal: false
      };
      console.log( this.state.showModal );
  }

  // this.button.onClick = 

  // setTimeout(
  //   function() {
  //       this.setState({position: 1});
  //   }
  //   .bind(this),
  //   3000
  // );

// <img src={logo} className="App-logo" alt="logo" /> 




  render() {
    return (
      <div className="App">

        <div className="screen-loader">
          <div>
            <img src={logo} className="App-logo-loader" alt="logo" />
            <h4 className="event-date">December 1-4, 2018</h4>
          </div>
        </div>
        
        <a className="logo-wrapper" href="#">
          <h4 className="event-date">December 1-4, 2018</h4>
          <SVG fill="#000" width="100px" height="110px" viewBox="10 10 100 100" />
        </a>

        <header className="App-header">
          <a className="App-menu">
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </header>

        <RegistrationModal />

        <div className="body">
          <h1>A Conference For Round Pegs in a Square World.</h1>
          <a href="#" className="hero-link hero-link-about">About</a>
          <a href="#" className="hero-link hero-link-speakers">Speakers</a>
          <div className="image-holder">
            <img src={square} className="image-square" alt="logo" />
            <div className="image-holder-circle">
              <div className="color-circle"></div>
              <img src={circle} className="image-circle" alt="logo" />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;



