import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Location from '../Location/Location';
import './Home.css'

const Home = () => {
    const locations = useLoaderData();
    console.log(locations);
    return (
        <div className='home w-full h-screen flex flex-row items-center justify-center gap-4'>
            {
                locations.map(location => <Location key={location.id} location={location}></Location>)
            }

        </div>
    );
};

export default Home;