import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Booking = () => {

    const locations = useLoaderData();
    console.log(locations);

    const { id, name, details } = locations;

    return (
        <div className='home h-screen w-full grid grid-cols-2 gap-4'>
            <div className="mx-auto w-full mt-20 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 backdrop-blur">
                <h1 className='text-orange-500 text-3xl'>{name}</h1>
                <p className='text-white text-xl'>{details}</p>
            </div>
            <div className="mx-auto w-full mt-20 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 backdrop-blur">
                <form action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="origin" className="block mb-2 text-sm text-white">Origin</label>
                            <input type="text" name="origin" id="origin" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="destination" className="text-sm text-white">Destination</label>
                            </div>
                            <input type="text" name="destination" id="destination" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div className=''>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="From" className="text-sm text-white">From</label>
                            </div>
                            <input type="date" name="from" id="from" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div className=''>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="to" className="text-sm text-white">To</label>
                            </div>
                            <input type="date" name="to" id="to" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>


                    </div>
                    <div className="space-y-2">
                        <div>
                            <Link to={`/details/${id}`}>
                                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md  bg-orange-500 hover:bg-orange-400 text-white">Book</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;