// src/App.js
import React from 'react';
import './App.css'; // Importing CSS file to style the components

const App = () => {
  return (
    <div className="backgroundhome">
      <img src="C:/swiftrails/src/assets/imgs/swift-icon.png" alt="Swift Rails Icon" className="swiftRailsIcon" />
      
      <nav className="topNavigation">
        <ul>
          <li><a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">How it works</a>
          <a href="/">services</a>
          <a href="/">Contact</a></li>
          {/* Add other navigation items as needed */}
        </ul>
      </nav>

      {/* Other content of your homepage */}
    </div>
    
    
  );
}

export default App;

