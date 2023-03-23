import React from 'react'

const WeatherCityData = ({weatherData,cityName}) => {

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className={weatherData?.weathercode in [5,6,11] ? "fog " : weatherData?.weathercode in [0,1,4,8] ? "sun" : weatherData?.weathercode in [2,3,7,9,10,12,13,14,30] ? "rain" : weatherData?.weathercode in [24,25,26,27] ? "snow" : weatherData?.weathercode in [28,29,30] ? "thunder" : "cloud" }> 
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Current weather in {cityName} </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body d-flex flex-row align-items-start justify-content-between h-100">
            <div className=" d-flex flex-column align-items-start">
                <span>Wind speed: {weatherData?.windspeed} Km/h</span>
                <span>Wind direction: {weatherData?.winddirection} </span>
                <span>Weather code: {weatherData?.weathercode} </span>
                
            </div>
            <div className='image-weather d-flex align-items-center justify-content-center'>
                <div>{weatherData?.weathercode in [5,6,11] ? "🌫" :
                 weatherData?.weathercode in [0,1,4,8] ? `☀` :
                  weatherData?.weathercode in [2,3,7,9,10,12,13,14,30] ? `🌧` :
                   weatherData?.weathercode in [24,25,26,27] ? `🌨` :
                   weatherData?.weathercode in [28,29,30] ? `⛈` :
                    `🌥`}
                </div>
                <span className="badge badge-primary badge-pill">{weatherData?.temperature} °C</span>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCityData

