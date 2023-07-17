import './Nav.css';
import React from "react";
import burgerMenuIcon from '../icons/menu.svg';
import alternativeAirlinesLogo from "../images/logos/alternative-airlines.jpg"

import { useState } from "react";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    <>
      <div className="navigation">
        <a href="/">
          <img src={alternativeAirlinesLogo} className="header-logo" alt="alternative airlines logo"></img>
        </a>

        <button className='hamburger' onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          <img src={burgerMenuIcon} alt="Icon to expand mobile navigation" />
        </button>
      </div>
      <nav role="navigation" className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/">Book With Us</a>
          </li>
          <li>
            <a href="/">My Booking</a>
          </li>
          <li>
            <a href="/">Manage my booking</a>
          </li>
        </ul>
      </nav>
      <nav role="navigation" className="desktop-navigation">
        <div className="desktop-navigation-left-section">
          <ul>
            <li>
              <a href="/">Book flights</a>
            </li>
            <li>
              <a href="/">Information</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Travel Agents</a>
            </li>
          </ul>
        </div>
        <div className="desktop-navigation-right-section">
          <ul>
            <li>
              <a href="/">Manage booking</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}