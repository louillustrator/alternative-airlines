import "./HeroBanner.css";
import React from "react";
import TrustPilotLogo from "../images/trustpilot.png"
import FlightSearchForm from "./FlightSearchForm";

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <h1>Search and book flights to Australia</h1>
      <h2>Buy your flights now and pay later</h2>

      <div className="trustpilot-banner">
        <img src={TrustPilotLogo}></img>
        <h5>TrustScore 4.5 | 6,5000 reviews</h5>
      </div>
      <FlightSearchForm />
    </div>
  )
}