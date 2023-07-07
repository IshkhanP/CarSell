import React from 'react';
import './Car.css';
import MoreButton from './MoreButton';

function Car(props) {
    return (
        <div className="car">
            <img src={props.image} alt={`${props.make} ${props.model}`} />
            <div className="car-details">
                <h2>{props.make} {props.model}</h2>
                <p>Year: {props.year}</p>
                <p>Price: ${props.price}</p>
                <p><MoreButton text={props.description} maxLength={20} /></p>
            </div>
        </div>
    );
}

export default Car;