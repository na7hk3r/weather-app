import React from 'react'
import './WeatherApp.css'

import search_icon from '../../assets/search.png'
import clear_icon from '../../assets/clear.png'
import clouds_icon from '../../assets/clouds.png'
import drizzle_icon from '../../assets/drizzle.png'
import humidity_icon from '../../assets/humidity.png'
import mist_icon from '../../assets/mist.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/snow.png'
import wind_icon from '../../assets/wind.png'

const WeatherApp = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Buscar ciudad"/>
            <div className="search-icon">
                <img src={search_icon} alt="Search Icon" />
            </div>
        </div>
        <div className="weather-image">
            <img src={clouds_icon} alt="Icono Clima" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Canelones</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="Icono Humedad" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">64%</div>
                    <div className="text">Humedad</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="Icono Viento" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">18 km/h</div>
                    <div className="text">Velocidad del viento</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp