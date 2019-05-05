import React, { Component } from 'react';
import axios from 'axios';
import '../css/styles.css';

class Weather extends Component {

    constructor() {
        super()
        this.state = {
            city: null,
            state: null,
            showMessage: true,
            message: "You have successfully logged in"
        }

        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(event) {
        event.preventDefault() //stop page from reloading
        const formData = {
            lat: document.getElementById('lat').value,
            long: document.getElementById('long').value
        } //pull relevant information from the form using Id
        // console.log(formData.lat.length)
        if ((formData.lat.length !== 0) && (formData.long.length !== 0)) {

            axios({
                method: 'POST',
                data: formData,
                url: `${window.apiHost}/getWeather`
            }).then((response) => {

                const { city, state } = response.data; //pulling relevant data from response block using es6 destructuring 
                this.setState({
                    city,
                    state,
                    showMessage: false,
                }) //resets state object to city, state values returned from api call
            }) // api call to weather api
        } else {
            this.setState({
                city: null,
                state: null,
                showMessage: true,
                message: "Please enter valid coordinates"
            })
        }

    }


    render() {

        return (
            <div className="container">
                <div className="formBox">
                    <div id="message" className="text">{this.state.showMessage ? this.state.message : null}</div>
                    <div>
                        <form id="weatherForm" className="inputBox" onSubmit={this.getWeather}>
                            <input type="text" id="lat" aria-label="latitude field" className="inputField" placeholder="please enter a latitude" />
                            <input type="text" id="long" aria-label="longitude field" className="inputField" placeholder="please enter a longitude" />
                            <button type="submit" className="btn">Get Weather!</button>
                        </form>
                    </div>
                    <div>
                        <h1 id="city" className="text">City: {this.state.city}</h1>
                        <h1 id="state" className="text">State: {this.state.state}</h1>
                    </div>
                </div>
            </div>
        )
    }
};

export default Weather;