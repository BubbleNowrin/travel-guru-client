import React from 'react';
import { Link } from 'react-router-dom';

const Location = ({ location }) => {

    const { image, name, id } = location;
    return (

        <div className="max-w-xs mt-10 p-6 rounded-md hover:shadow-lg hover:shadow-white backdrop-blur dark:text-gray-50">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-3xl text-white font-semibold tracking-wide">{name}</h2>
            </div>
            <Link to={`/booking/${id}`}>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-500 hover:bg-orange-400 text-white">Start Booking</button>
            </Link>

        </div>

    );
};

export default Location;