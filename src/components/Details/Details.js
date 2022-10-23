import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelDetails from '../HotelDetails/HotelDetails';

const Details = () => {
    const hotel = useLoaderData();
    console.log(hotel);

    return (
        <div className='flex items-center justify-center gap-6 home w-full h-screen'>
            {
                hotel.map(ht => <HotelDetails key={ht._id} ht={ht}></HotelDetails>)
            }

        </div>
    );
};

export default Details;