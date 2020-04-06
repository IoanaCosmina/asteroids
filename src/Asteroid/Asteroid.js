import React from 'react';
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
        <div className="media asteroid--section">
            <figure className="media-left">
                <p className="image is-64x64">
                    {/* TO DO -- Write a function to randomize images */}
                    <img src={ast1} alt="asteroid"></img>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>Name: {name}</p>
                    <p>Distance ({unit_xl}): {Number(distance).toFixed(2)}</p>
                    <p>Velocity ({unit_xl}/hour): {Number(velocity).toFixed(2)}</p>
                    <p>Diameter ({unit_sm}): {Number(diameter_min).toFixed(2)} - {Number(diameter_max).toFixed(2)}</p>
                    <p>Is Potentially Hazardous? {isHazardous ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    )
}

export default Asteroid;