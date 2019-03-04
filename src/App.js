import React, { Component } from 'react';
import logo from './images/logo-text.svg';
import square from './images/image-square.jpg';
import circle from './images/image-circle.png';
import down_arrow from './images/Rectangle.png';
import SVG from './components/logo.js';
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

// <img src={logo} className="App-logo" alt="logo" /> 

// <div className="screen-loader">
//   <div>
//     <img src={logo} className="App-logo-loader" alt="logo" />
//     <h4 className="event-date">December 1-4, 2018</h4>
//   </div>
// </div>

// <div className="registration-modal">
//   <div className="registration-wrapper">
//     <h3>Register</h3>
//     <p>Thank you for your interest in Circle Conference</p>
//     <form id="circle-registration-form">
//       <div>
//         <input type="text" className="inputText" name="full-name" required />
//         <span className="floating-label">Full Name</span>
//       </div>
//       <div>
//         <input type="text" className="inputText" name="email" required />
//         <span className="floating-label">Email</span>
//       </div>
//       <div>
//         <select name="source">
//           <option disabled selected value className="default">How did you hear about us?</option>
//           <option>Option 1</option>
//           <option>Option 2</option>
//           <option>Option 3</option>
//         </select>
//       </div>
//     </form>
//     <button type="submit" form="circle-registration-form" value="Submit" className="submit-button">Submit</button>
//   </div>
// </div>

  render() {
    return (
      <div className="App">
        
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



