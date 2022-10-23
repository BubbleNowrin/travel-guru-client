import React from 'react';
import { Link } from 'react-router-dom';

const HotelDetails = ({ ht }) => {
    const { image_url, name, title, ratings, details } = ht;
    return (

        <div className="mt-10 backdrop-blur max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-s text-white font-semibold tracking-wide">{title}</h2>
                    <p className="text-gray-100 text-xs">{details}</p>
                </div>
            </div>
        </div>

    );
};

export default HotelDetails;