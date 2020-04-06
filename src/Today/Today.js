import React, { Component } from 'react';
import './Today.css';
import axios from 'axios';
import * as Utils from '../utils.js';
import * as Constants from '../constants.js';
import Asteroid from '../Asteroid/Asteroid';

class Today extends Component {
    constructor() {
        super();
        this.state = {
            asteroids: []
        };
    }

    componentDidMount() {
        let current_date = Utils.getCurrentDate();
        axios.get(`${Constants.API_URL}/feed?start_date=${current_date}&end_date=${current_date}&api_key=${Constants.API_KEY}`)
            .then(response => {
                const asteroidObj = response.data.near_earth_objects;
                this.setState({ asteroids: asteroidObj[Object.keys(asteroidObj)[0]] });
                console.log("asteroids", this.state.asteroids);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1 className="title is-spaced">Today - {Utils.getCurrentDate("string")}</h1>
                <h2 className="subtitle">{this.state.asteroids.length} Asteroids</h2>
                <div className="container today--container">
                    {
                        this.state.asteroids.map(asteroid => (
                            <Asteroid key={asteroid.name} asteroid={asteroid} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Today;