import React, { useState } from 'react'

const WeatherCityInput = ({onSearch,belgradeWeather}) => {

  const [text, setText] = useState("");

  return (
    <div className="newsletter-subscribe">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Welcome to Weather App</h2>
                <p className="text-center">Current weather in Belgrade is {belgradeWeather?.temperature} °C </p>
                <p className="text-center">Check the temperature in other cities below</p>
            </div>
            <div className="form-inline temp">
                <div className="form-group"><input className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="City name"/></div>
                <div className="form-group"><button className="btn btn-primary" onClick={() => { return (
                  onSearch?.(text),
                  setText("")
                  )}}>Search </button></div>
            </div>
        </div>
    </div>

  )
}

export default WeatherCityInput