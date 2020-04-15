import React, { Component } from 'react';
import '../assets/css/History.css';
import axios from 'axios';
import moment from 'moment';
import * as Constants from '../constants.js';
import HistoryCard from './HistoryCard';

class History extends Component {
    state = { yesterdayInfo: {}, twodaysInfo: {}, threedaysInfo: {} }

    getAsteroids = (date) => {
        return axios.get(`${Constants.API_URL}/feed?start_date=${date}&end_date=${date}&api_key=${Constants.API_KEY}`);
    }

    getYesterdayInfo = () => {
        let t = moment().subtract(1, 'days').format('YYYY-MM-DD');
        this.getAsteroids(t)
            .then(response => {
                const asteroidObj = response.data.near_earth_objects;
                let f = {
                    date: moment().subtract(1, 'days').format("MMMM Do, YYYY"),
                    allAsteroids: asteroidObj[Object.keys(asteroidObj)[0]],
                    count: asteroidObj[Object.keys(asteroidObj)[0]].length
                }
                this.setState({ yesterdayInfo: f });
            });
    }

    getTwoDaysInfo = () => {
        let t = moment().subtract(2, 'days').format('YYYY-MM-DD');
        this.getAsteroids(t)
            .then(response => {
                const asteroidObj = response.data.near_earth_objects;
                let f = {
                    date: moment().subtract(2, 'days').format("MMMM Do, YYYY"),
                    allAsteroids: asteroidObj[Object.keys(asteroidObj)[0]],
                    count: asteroidObj[Object.keys(asteroidObj)[0]].length
                }
                this.setState({ twodaysInfo: f });
            });
    }

    getThreeDaysInfo = () => {
        let t = moment().subtract(3, 'days').format('YYYY-MM-DD');
        this.getAsteroids(t)
            .then(response => {
                const asteroidObj = response.data.near_earth_objects;
                let f = {
                    date: moment().subtract(3, 'days').format("MMMM Do, YYYY"),
                    allAsteroids: asteroidObj[Object.keys(asteroidObj)[0]],
                    count: asteroidObj[Object.keys(asteroidObj)[0]].length
                }
                this.setState({ threedaysInfo: f });
            });
    }

    componentDidMount() {
        this.getYesterdayInfo();
        this.getTwoDaysInfo();
        this.getThreeDaysInfo();
    }

    render() {
        return (
            <div>
                <h1 className="title is-spaced">Last 3 days</h1>
                <div className="container history--container">
                    <HistoryCard history={this.state.yesterdayInfo}></HistoryCard>
                    <HistoryCard history={this.state.twodaysInfo}></HistoryCard>
                    <HistoryCard history={this.state.threedaysInfo}></HistoryCard>
                </div>
            </div>
        )
    }
}

export default History;