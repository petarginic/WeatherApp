import React,{useEffect, useState} from 'react'
import WeatherCityData from './WeatherCityData'
import WeatherCityInput from './WeatherCityInput'
import WeatherCityList from './WeatherCityList'

const CITY_URL = "https://geocoding-api.open-meteo.com/v1/search?name=";
const BELGRADE_LONG = "20.46513"
const BELGRADE_LAT = "44.80401"

const WeatherCity = () => {

    const [cityList,setCityList] = useState([])
    const [cityWeather, setCityWeather] = useState(null)
    const [cityName,setCityName] = useState("")
    const [belgradeWeather,setBelgradeWeather] = useState(null)

   useEffect(() => {
    const fetchWeatherForBelgrade = async () => {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${BELGRADE_LAT}&longitude=${BELGRADE_LONG}&current_weather=true`)
        const json = await response.json()
        setBelgradeWeather(json.current_weather)
    }
    fetchWeatherForBelgrade()
   },[])

    const fetchCityList = async (cityName) => {
        if(cityName) {
            const response = await fetch(`${CITY_URL}${cityName}`);
            const json = await response.json();
            setCityList(json.results ?? []);
        }   
    };

    const fetchCityWeatherData = async (latitude,longitude,city) => {
        console.log(latitude,longitude)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const json = await response.json();
        setCityWeather(json.current_weather);
        setCityName(city)
    }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        <WeatherCityInput onSearch={(city) => fetchCityList(city)} belgradeWeather={belgradeWeather}/>
        <WeatherCityList cityList={cityList} onViewWeather={(latitude,longitude,city) => fetchCityWeatherData(latitude,longitude,city)} />
        <WeatherCityData weatherData={cityWeather} cityName={cityName} />
    </div>
  )
}

export default WeatherCity