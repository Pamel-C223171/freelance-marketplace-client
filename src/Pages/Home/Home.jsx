import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    const jobs = data.slice(0,6);
    // console.log(data);
    return (
        <div className='my-14'>
            {/* banner section */}
            <div className='w-full h-[200px] bg-[#2600ff]'>
                <h2 className='text-center text-3xl font-bold text-[#ffffff]'>Home Pages</h2>
            </div>

            {/* latest Jobs */}
             <div className='mt-14 w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Latest Jobs</h2>
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(job =>
                        <div className="card bg-white shadow-sm p-3 hover:scale-105 transition ease-in-out">
                            <figure className='h-48 overflow-hidden rounded-2xl'>
                                <img className='w-full object-cover'
                                    src={job.coverImage}
                                    alt="Shoes" />
                            </figure>

                            <div className='mt-3'>
                                <div className='flex justify-between'>
                                    <p>{job.status}</p>
                                    {/* <div className="badge  text-[#FF8811] bg-[#FFF0E1]">
                                        <img className="w-[15px] h-[15px]" src={ratingimg} alt="" />{app.rating}</div> */}
                                </div>
                                <div className="card-actions justify-between mt-4">
{/* 
                                    <div className="badge text-black bg-[#F1F5E8] "><img className="w-[15px] h-[15px]" src={priceimg} alt="" />{app.price}</div> */}
                                    <div className="badge text-[#00D390] bg-[#F1F5E8]">{job.status}</div>

                                </div>
                                <NavLink to={`/jobdetails/${job._id}`} ><button className='btn btn-primary w-full mt-4'>View More</button></NavLink>

                            </div>
                        </div>

                    )
                }
            </div>
            <div className=' mt-10 flex justify-center'>
                <NavLink to='/alljobs'><button className='btn btn-primary'>View All Jobs</button></NavLink>
            </div>
             </div>

        </div>
    );
};

export default Home;