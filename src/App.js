import React, { Component } from 'react';
import logo from './images/logo-text.svg';
import square from './images/image-square.jpg';
import circle from './images/image-circle.png';
import './App.css';

class App extends Component {
  // this.button.onClick = 

  // setTimeout(
  //   function() {
  //       this.setState({position: 1});
  //   }
  //   .bind(this),
  //   3000
  // );

  render() {
    return (
      <div className="App">

        <div className="screen-loader">
          <div>
            <img src={logo} className="App-logo-loader" alt="logo" />
            <h4 className="event-date">December 1-4, 2018</h4>
          </div>
        </div>

        <header className="App-header">
          <div className="logo-wrapper">
            <h4 className="event-date">December 1-4, 2018</h4>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="menu-wrapper">

          </div>
        </header>

        <div className="body">
          <h1>A Conference For Round Pegs in a Square World.</h1>
          <a href="#" className="hero-banner-link hero-banner-link-about">About</a>
          <a href="#" className="hero-banner-link hero-banner-link-speakers">Speakers</a>
          <a href="#" className="hero-banner-link hero-banner-link-register">Register</a>
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



