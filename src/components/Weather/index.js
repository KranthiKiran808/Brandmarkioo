import React, { Component } from 'react';
import './index.css'; 

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            city: 'Bengaluru', // Default city
        };
    }

    changeDataOnScreen = (data) => {
        this.setState({ weatherData: data });
    };

    getTheDetails = (userInput) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=7bd57d2ad809cc80894779e51310e50c&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.changeDataOnScreen(data);
            });
    };

    handleSearch = () => {
        this.getTheDetails(this.state.city);
    };

    handleInputChange = (event) => {
        this.setState({ city: event.target.value });
    };

    componentDidMount() {
        this.handleSearch(); 
    }

    render() {
        const { weatherData, city } = this.state;

        return (
            <div className="weather-container">
                <input
                    type="text"
                    value={city}
                    onChange={this.handleInputChange}
                    placeholder="Enter city"
                />
                <button onClick={this.handleSearch}>Search</button>
                {weatherData && (
                    <div className="weather-info">
                        <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Weather;