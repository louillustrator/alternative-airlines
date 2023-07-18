import "./FlightSearchForm.css"
import { useRef } from "react";
import React from "react";

export default function FlightSearchForm() {
  const whereFrom = useRef();
  const whereTo = useRef();
  const flightType = useRef("return");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", whereFrom.current.value);
    console.log("Select value:", whereTo.current.value);
    console.log("Select value:", flightType.current.value);
  }

  function handleChange(event) {
    console.log(flightType.current.value)
    flightType.current = flightType.current.value
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="radio-btn-row">
          <label className="radio-button-label">
            <input type="radio" ref={flightType} name="optradio" value="return" className="radio-button" checked={flightType === "return"} onChange={handleChange} />Return
          </label>
          <label className="radio-button-label">
            <input type="radio" ref={flightType} name="optradio" value="one-way" className="radio-button" checked={flightType === "one-way"}
              onChange={handleChange} />One Way
          </label>
          <label className="radio-button-label">
            <input type="radio" ref={flightType} name="optradio" value="multi-city" className="radio-button" checked={flightType === "multi-city"}
              onChange={handleChange} />Multi-city
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