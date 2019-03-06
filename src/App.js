import React, { Component } from 'react';
import logo from './images/logo-text.svg';
import square from './images/image-square.jpg';
import circle from './images/image-circle.png';

import SVG from './components/logo.js';
import RegistrationModal from './components/RegistrationModal.js';

import './App.css';

class App extends Component {
  state = {
    color: '#000'
  }

  constructor(props) {
      super(props);
      this.changeColor = this.changeColor.bind( this );
  }

  changeColor( color ){
    this.setState({ color: color });
  }


  render() {
    const { color } = this.state;

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
          <SVG fill={ color } width="100px" height="110px" viewBox="10 10 100 100" />
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

        <RegistrationModal changeColor={ this.changeColor }/>

        <div className="body">
          <h1>A Conference For Round Pegs in a Square World.</h1>
          <a href="#" className="hero-link hero-link-about">About</a>
          <a href="#" className="hero-link hero-link-speakers">Speakers</a>
          <div className="image-holder">
            <div className="image-relative"> 
              <img src={square} className="image-square" alt="logo" />
              <div className="image-holder-circle">
                <div className="color-circle"></div>
                <img src={circle} className="image-circle" alt="logo" />
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;



