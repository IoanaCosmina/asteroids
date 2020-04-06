import React from 'react';
import './Asteroid.css';
import ast1 from '../images/asteroid/1.jpg';

const Asteroid = ({ asteroid }) => {
    if (!asteroid) return null;

    const { name, estimated_diameter } = asteroid;
    const { miss_distance, relative_velocity } = asteroid.close_approach_data[0];
    const isHazardous = asteroid.is_potentially_hazardous_asteroid;

    // TO DO -- Write a generic function for this and move to utils.js
    const isMetric = true;
    const unit_sm = isMetric ? "meters" : "feet";
    const unit_xl = isMetric ? "kilometers" : "miles";
    const distance = isMetric ? miss_distance.kilometers : miss_distance.miles;
    const velocity = isMetric ? relative_velocity.kilometers_per_hour : relative_velocity.miles_per_hour;
    const diameter_min = isMetric ? estimated_diameter.meters.estimated_diameter_min : estimated_diameter.feet.estimated_diameter_min;
    const diameter_max = isMetric ? estimated_diameter.meters.estimated_diameter_max : estimated_diameter.feet.estimated_diameter_max;

    return (
        <div className="card section">
            <div className="card-image">
                <figure className="image is-4by3">
                    {/* TO DO -- Write a function to randomize images */}
                    <img src={ast1} alt="asteroid"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-3">Name: {name}</p>
                        <article className={isHazardous ? "message is-warning" : "message is-success"}>
                            <div className="message-body">
                                <p>Potentially Hazardous? {isHazardous ? "Yes" : "No"}</p>
                                
                            </div>
                        </article>
                    </div>
                </div>
                <div className="content">
                    <div className="field">
                        <label className="label is-small">Distance:</label>
                        <span>{Number(distance).toFixed(2)} {unit_xl}</span>
                    </div>
                    <div className="field">
                        <label className="label is-small">Velocity:</label>
                        <span>{Number(velocity).toFixed(2)} {unit_xl}/hour</span>
                    </div>
                    <div className="field">
                        <label className="label is-small">Diameter:</label>
                        <span>{Number(diameter_min).toFixed(2)} - {Number(diameter_max).toFixed(2)} {unit_sm}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asteroid;