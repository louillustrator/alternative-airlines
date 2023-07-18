import "./FlightSearchForm.css"
import { useRef } from "react";
import React from "react";

export default function FlightSearchForm() {
  const whereFrom = useRef();
  const whereTo = useRef();
  const flightType = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", whereFrom.current.value);
    console.log("Select value:", whereTo.current.value);
    console.log("Select value:", flightType.current.value);
  }

  function handleChange(event) {
    console.log(flightType)
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="radio-btn-row">
          <label class="radio-button-label">
            <input type="radio" ref={flightType} name="optradio" className="radio-button" checked onClick={handleChange} />Return
          </label>
          <label class="radio-button-label">
            <input type="radio" ref={flightType} name="optradio" className="radio-button" onClick={handleChange} />One Way
          </label>
          <label class="radio-button-label">
            <input type="radio" ref={flightType} name="optradio" className="radio-button" onClick={handleChange} />Multi-city
          </label>
        </div>
        <div className="input-column">
          <input className="input-box" name="whereFrom" ref={whereFrom} type="text" placeholder="Where from" />
          <input className="input-box" name="whereTo" ref={whereTo} type="text" placeholder="Where to" />
          <input className="input-box" name="Dates" ref={whereFrom} type="text" placeholder="Where from" />
          <input className="input-box" name="Passengers" ref={whereTo} type="text" placeholder="Where to" />
        </div>


        <button type="submit">Search Flights</button>
      </form >
    </>
  );
}