import React from 'react'

const WeatherCityList = ({cityList,onViewWeather}) => {
  return (
    <ul className="list-group w-50">
        {cityList.map((city) => (
            <li key={city.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className='d-flex justify-content-between'><span className='text-primary'>{city.name}</span> <div className='ml-3'>{city.country}</div> </div>
                <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModalCenter" onClick={() => onViewWeather?.(city.latitude, city.longitude,city.name)}>Get Weather⛅</button>
            </li>
        ))}      
    </ul>
  )
}

export default WeatherCityList