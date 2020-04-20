import React, { Component } from 'react';
import '../assets/css/Today.css';
import axios from 'axios';
import moment from 'moment';
import * as Constants from '../constants.js';
import Asteroid from '../components/Asteroid';
import Pagination from '../components/Pagination';

class Today extends Component {
    state = { allAsteroids: [], currentAsteroids: [], currentPage: null, totalPages: null };

    componentDidMount() {
        if (!navigator.onLine) {
            this.setState({ allAsteroids: localStorage.getItem('allAsteroids') });
        }
        let current_date = moment().format('YYYY-MM-DD');
        axios.get(`${Constants.API_URL}/feed?start_date=${current_date}&end_date=${current_date}&api_key=${Constants.API_KEY}`)
            .then(response => {
                const asteroidObj = response.data.near_earth_objects;
                this.setState({ allAsteroids: asteroidObj[Object.keys(asteroidObj)[0]] });
                localStorage.setItem('allAsteroids', asteroidObj[Object.keys(asteroidObj)[0]]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    onPageChanged = data => {
        const { allAsteroids } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentAsteroids = allAsteroids.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentAsteroids, totalPages });
    }

    render() {
        const {
            allAsteroids,
            currentAsteroids
        } = this.state;
        const totalAsteroids = allAsteroids.length;

        if (totalAsteroids === 0) return null;

        return (
            <div>
                <h1 className="title is-spaced">Today - {moment().format('MMMM Do, YYYY')}</h1>
                <h2 className="subtitle">{totalAsteroids} Asteroids</h2>
                <div className="">
                    <Pagination
                        totalRecords={totalAsteroids}
                        pageLimit={3}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged}
                    />
                </div>
                <div className="container today--container">
                    {currentAsteroids.map(asteroid => (
                        <Asteroid key={asteroid.id} asteroid={asteroid} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Today;