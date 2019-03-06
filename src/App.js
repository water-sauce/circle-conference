import React, { Component } from 'react';
import square from './images/image-square.jpg';
import circle from './images/image-circle.png';
import LineSVG from './components/AccentLine.js';
import SmallLineSVG from './components/SmallLine.js';

import RegistrationModal from './components/RegistrationModal.js';
import PreScreenLoader from './components/PreScreenLoader.js';
import Header from './components/Header.js';

import './App.scss';

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
      <div className="App" id="top">

        <PreScreenLoader />
        <Header color={ color } />
        <RegistrationModal changeColor={ this.changeColor }/>

        <div className="body">
          <LineSVG />
          <SmallLineSVG />

          <h1>A Conference For Round Pegs in a Square World.</h1>
          <a href="#top" className="hero-link hero-link-about">About</a>
          <a href="#top" className="hero-link hero-link-speakers">Speakers</a>
          <div className="image-wrapper">
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



