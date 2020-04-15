import React from 'react';
import '../assets/css/HistoryCard.css';

const HistoryCard = props => {
    const { date, count, allAsteroids } = props.history;
    if (!allAsteroids) return null;

    return (
        <React.Fragment>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {date}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="field">
                            <label className="label is-small">Total:</label>
                            <span>{count} asteroids</span>
                        </div>
                        <p>List of potentially hazardous asteroids:</p>
                        <ul className="fa-ul">
                            {
                                allAsteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid).map(filteredAsteroid => (
                                    <li key={filteredAsteroid.id}>
                                        <i className="fa-li fa fa-exclamation"></i>
                                        <span>{filteredAsteroid.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HistoryCard;