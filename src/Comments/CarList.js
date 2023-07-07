import React from 'react';
import Car from './Car';
import './CarList.css';

function CarList(props) {
    const carList = props.cars.map(car => (
        <Car
            key={car.id}
            make={car.make}
            model={car.model}
            year={car.year}
            price={car.price}
            image={car.image}
            description={car.description}
        />
    ));

    return <div className="car-list">{carList}</div>;
}

export default CarList;