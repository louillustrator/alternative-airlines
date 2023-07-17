import './Nav.css';
import React from "react";
import burgerMenu from '../icons/menu.svg';
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
          console.log('clicked')
          setIsNavExpanded(!isNavExpanded);
        }}>
          <img src={burgerMenu} />
        </button>
      </div>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
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
      </div>

    </>
  )
}