import React from 'react';
import '../assets/css/HistoryCard.css';

const HistoryCard = props => {
    const { date, count, allAsteroids } = props.history;
    if (!allAsteroids) return null;

    return (
        <React.Fragment>
            <div className="message is-dark">
                <div className="message-header">
                    <p className="">{date}</p>
                </div>
                <div className="message-body">
                    <div className="field">
                        <label className="label ">Total:</label>
                        <span>{count} asteroids</span>
                    </div>
                    <div className="content">
                        <p>List of potentially hazardous asteroids:</p>
                        <ul>
                            {
                                allAsteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid).map(filteredAsteroid => (
                                    <li key={filteredAsteroid.id}>
                                        {filteredAsteroid.name}
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