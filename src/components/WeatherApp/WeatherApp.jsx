import React, { useState, useEffect, useRef } from 'react'
import './WeatherApp.css'
import search_icon from '../../assets/search.png'
import humidity_icon from '../../assets/humidity.png'
import wind_icon from '../../assets/wind.png'

const WeatherApp = () => {

    const api_key = import.meta.env.VITE_APP_API; 
    const [wicon, setWicon] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [suggestions, setSuggestions] = useState([]);
    const inputSearchRef = useRef(null);

    useEffect(() => {
        // Ciudad por defecto al cargar el componente //
        mostrarInformacionCiudad('Montevideo');
    }, []);

    const mostrarInformacionCiudad = async (ciudad) => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=Metric&appid=${api_key}`;
            let response = await fetch(url);
            if (!response.ok) throw new Error('Error en la búsqueda');
            let data = await response.json();
            const { main, wind, name, sys, weather } = data;

            setWeatherData({
                humidity: `${main.humidity}%`,
                windSpeed: `${Math.round(wind.speed)} km/h`,
                temperature: `${Math.round(main.temp)}°C`,
                location: `${name}, ${sys.country}`,
            });

            const iconCode = weather[0].icon;
            setWicon(`http://openweathermap.org/img/w/${iconCode}.png`);
        } catch (error) {
            console.error(error);
        }
    }

    const search = async (e) => {
        e.preventDefault();
        const searchValue = inputSearchRef.current.value;
        if (searchValue) {
            mostrarInformacionCiudad(searchValue);
            setSuggestions([]);
        } else {
            console.log("error");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            search(e);
        }
    }

    const handleInputChange = async (e) => {
        const searchValue = e.target.value;
        if (searchValue) {
            try {
                const url = `https://api.openweathermap.org/data/2.5/find?q=${searchValue}&appid=${api_key}&units=metric`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Error al obtener sugerencias');
                const data = await response.json();
                const filteredSuggestions = data.list.map(city => `${city.name}, ${city.sys.country}`);
                setSuggestions(filteredSuggestions);
            } catch (error) {
                console.error(error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input 
                    type="text" 
                    className="cityInput" 
                    ref={inputSearchRef} 
                    placeholder="Buscar ciudad" 
                    onKeyPress={handleKeyPress} 
                    onChange={handleInputChange} 
                />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="Search Icon" />
                </div>
            </div>
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((city, index) => (
                        <li key={index} onClick={() => {
                            mostrarInformacionCiudad(city);
                            setSuggestions([]);
                        }}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
            <div className="weather-card">
                <div className="weather-image">
                    <img src={wicon} alt="Icono Clima" />
                </div>
                <div className="weather-info">
                    <div className="weather-temp">{weatherData.temperature}</div>
                    <div className="weather-location">{weatherData.location}</div>
                </div>
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="Icono Humedad" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">{weatherData.humidity}</div>
                        <div className="text">Humedad</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="Icono Viento" className="icon" />
                    <div className="data">
                        <div className="wind-rate">{weatherData.windSpeed}</div>
                        <div className="text">Velocidad del viento</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp