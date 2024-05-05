import React, { useState } from 'react'
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

// const WeatherApp = () => {

//     const api_key = "73d10e5c0536582b5615d8ee070c518d";

//     const [wicon, setWicon] = useState(clouds_icon);
    
//     const search = async () => {
//         const inputSearch = document.getElementsByClassName('cityInput');
//         let searchValue;
//         if(inputSearch[0].value === ''){
//             searchValue = "montevideo";
//         } else {
//             searchValue = inputSearch[0].value;
//         }

//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=Metric&appid=${api_key}`;
//         let response = await fetch(url);
//         let data = await response.json();
        
//         const humidity = document.getElementsByClassName('humidity-percentage');
//         const wind = document.getElementsByClassName('wind-rate');
//         const temperature = document.getElementsByClassName('weather-temp');
//         const location = document.getElementsByClassName('weather-location');

//         humidity[0].innerHTML= `${data.main.humidity}%`;
//         wind[0].innerHTML=`${Math.round(data.wind.speed)} km/h`;
//         temperature[0].innerHTML=`${Math.round(data.main.temp)}°C`
//         location[0].innerHTML=`${data.name}, ${data.sys.country}`;  

//         if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
//             setWicon(clear_icon);
//         } 
//         else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
//             setWicon(clouds_icon);
//         }
//         else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
//             setWicon(drizzle_icon);
//         }
//         else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
//             setWicon(drizzle_icon);
//         }
//         else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
//             setWicon(rain_icon);
//         }
//         else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
//             setWicon(rain_icon);
//         }
//         else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
//             setWicon(snow_icon);
//         }
//         else {
//             setWicon(mist_icon);
//         }
//     }
//   return (
//     <div className='container'>
//         <div className="top-bar">
//             <input type="text" className="cityInput" placeholder="Buscar ciudad"/>
//             <div className="search-icon" onClick={()=>{search()}}>
//                 <img src={search_icon} alt="Search Icon" />
//             </div>
//         </div>
//         <div className="weather-image">
//             <img src={wicon} alt="Icono Clima" />
//         </div>
//         <div className="weather-temp"></div>
//         <div className="weather-location"></div>
//         <div className="data-container">
//             <div className="element">
//                 <img src={humidity_icon} alt="Icono Humedad" className="icon" />
//                 <div className="data">
//                     <div className="humidity-percentage"></div>
//                     <div className="text">Humedad</div>
//                 </div>
//             </div>
//             <div className="element">
//                 <img src={wind_icon} alt="Icono Viento" className="icon" />
//                 <div className="data">
//                     <div className="wind-rate"></div>
//                     <div className="text">Velocidad del viento</div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

const WeatherApp = () => {

    const api_key = "73d10e5c0536582b5615d8ee070c518d";
    const [wicon, setWicon] = useState(clouds_icon);

    const mostrarInformacionCiudad = async (ciudad) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percentage');
        const wind = document.getElementsByClassName('wind-rate');
        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = `${data.main.humidity}%`;
        wind[0].innerHTML = `${Math.round(data.wind.speed)} km/h`;
        temperature[0].innerHTML = `${Math.round(data.main.temp)}°C`;
        location[0].innerHTML = `${data.name}, ${data.sys.country}`;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(clouds_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon);
        }
        else {
            setWicon(mist_icon);
        }
    }

    // X defecto
    mostrarInformacionCiudad('Montevideo');

    const search = async (e) => {
        e.preventDefault();

        const inputSearch = document.getElementsByClassName('cityInput')[0];
        let searchValue = inputSearch.value;
        searchValue != '' ? mostrarInformacionCiudad(searchValue) : console.log("error");
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Buscar ciudad" />
                <div className="search-icon" onClick={(e) => search(e)}>
                    <img src={search_icon} alt="Search Icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="Icono Clima" />
            </div>
            <div className="weather-temp"></div>
            <div className="weather-location"></div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="Icono Humedad" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage"></div>
                        <div className="text">Humedad</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="Icono Viento" className="icon" />
                    <div className="data">
                        <div className="wind-rate"></div>
                        <div className="text">Velocidad del viento</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeatherApp