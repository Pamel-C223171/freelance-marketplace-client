import React, { use } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
// import heartimg from '../../assets/heart.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Home = () => {
    const data = useLoaderData();
    const jobs = data;
    const { user } = use(AuthContext);
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
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold'>{job.title}</p>
                                        <div className="badge bg-base-300 px-2 py-5">
                                            <p className='text-xs text-center'>{job.category}</p></div>
                                    </div>
                                    <div className="card-actions justify-start items-center mt-3">

                                        <div className=" text-black  "><img className="rounded-full  h-[25px] w-[25px]"
                                            alt="User Image"
                                            src={`${user?.photoURL || "https://th.bing.com/th/id/R.2fa57439a24f242faaf2333fe5e9e295?rik=ERIOJB6KU7TNYw&pid=ImgRaw&r=0"}`} /></div>
                                        <div className="font-semibold">{job.postedBy}</div>

                                    </div>
                                    {/* <div className="card-actions justify-between mt-4">
                                        
                                    <div className="badge text-black bg-[#F1F5E8] "><img className="w-[15px] h-[15px]" src={priceimg} alt="" />{app.price}</div>
                                        <div className="badge text-[#00D390] bg-[#F1F5E8]">{job.status}</div>

                                    </div> */}
                                    <NavLink to={`/jobdetails/${job._id}`} ><button className='btn btn-primary w-full mt-4'>View Details</button></NavLink>

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