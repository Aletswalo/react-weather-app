import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            decription: response.data.weather[0].description,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <div className="Weather">
            let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city" class="formControl" onChange={updateCity} />
            <input type="submit" value="Search" class="searchInput" />
        </form>
            );

               
       </div>

)}

