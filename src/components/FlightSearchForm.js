import "./FlightSearchForm.css"
import { useState } from "react";
import React from "react";

export default function FlightSearchForm() {

  const [whereFromInput, setWhereFromInput] = useState("");
  const [whereToInput, setWhereToInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [passengersInput, sePassengersFromInput] = useState("");
  const [flightTypeValue, setFlightTypeValue] = useState("return")



  const handleSubmit = (event) => {
    event.preventDefault();
    const formDetails = {
      flightType: flightTypeValue,
      whereFrom: whereFromInput,
      whereTo: whereToInput,
      date: dateInput,
      passengers: passengersInput
    }
    console.log('FORM SUBMITTED', formDetails, 'formDetails')
  }


  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setFlightTypeValue(target.value);
    }
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="radio-toggle-wrapper">
          <div className="radio-btn-row">
            <label className="radio-button-label">
              <input type="radio" name="optradio" value="return" className="radio-button" checked={flightTypeValue === "return"}
                onChange={handleChange} />Return
            </label>
            <label className="radio-button-label">
              <input type="radio" name="optradio" value="one-way" className="radio-button" checked={flightTypeValue === "one-way"}
                onChange={handleChange} />One Way
            </label>
            <label className="radio-button-label">
              <input type="radio" name="optradio" value="multi-city" className="radio-button" checked={flightTypeValue === "multi-city"}
                onChange={handleChange} />Multi-city
            </label>
          </div>
          <div className="toggle">toggle here</div>
        </div>
        <div className="input-button-wrapper">
          <div className="input-column">
            <div className="input-wrapper">
              <input className="input-box" name="whereFrom" type="text" placeholder="Where from" onChange={e => setWhereFromInput(e.target.value)} />
              <input className="input-box" name="whereTo" type="text" placeholder="Where to" onChange={e => setWhereToInput(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <input className="input-box" name="Dates" type="text" placeholder="Dates" onChange={e => setDateInput(e.target.value)} />
              <input className="input-box" name="Passengers" type="text" placeholder="Passengers" onChange={e => sePassengersFromInput(e.target.value)} />
            </div>
          </div>
          <button className="submit-button" type="submit">Search Flights</button>
        </div>
      </form >
    </>
  );
};