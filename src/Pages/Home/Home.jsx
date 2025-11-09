import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            {/* banner section */}
            <div className='w-full h-[200px] bg-[#2600ff] mt-10'>
                <h2 className='text-center text-3xl font-bold text-[#ffffff]'>Home Pages</h2>
            </div>

            {/* latest Jobs */}
            <div>

            </div>

        </div>
    );
};

export default Home;