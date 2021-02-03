import React from 'react';

export class MenuBar extends React Component {
  render() {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-logo">
          <h1>Wakaba Farms</h1>
        </div>
        <div className="search-bar">
         <input type="text" placeholder="Search the site" className="search-input"/>
        </div>
        </div>
      <div className="nav-bar">
        <ul className="nav-list">
          <li>
            <a href="#" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#" className="nav-link">What's New</a>
          </li>
        <li>
            <a href="#" className="nav-link">Shop</a>
          </li>
      <li>
            <a href="#" className="nav-link">About Us</a>
          </li>
    <li>
            <a href="#" className="nav-link">Privacy Policy</a>
          </li>
    <li>
            <a href="#" className="nav-link">Contact Us</a>
          </li>
    <li>
            <a href="#" className="nav-link">日本語</a>
          </li>
        </ul>
      </div>
      
      </div>
  );
} 
}  
