import React, { use } from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const AllJobs = () => {
    const data = useLoaderData();
    const { user } = use(AuthContext);
    const jobs = data;
    // console.log(data);
    const navigate = useNavigate();

     const handleDetailsBtn = (id) =>{
         if(!user){
            navigate('/login');
    }
    else{
        navigate(`/jobDetails/${id}`);
    }
    } 

     

    return (
        <div className='py-14 bg-base-100'>

            {/* latest Jobs */}
            <div className='w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold text-center'>All Jobs</h2>
               <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                   {
                                       jobs.map(job =>
                                           <div className="card bg-base-300 shadow-2xl p-3 hover:scale-105 transition ease-in-out flex flex-col justify-between h-full">
                                               <figure className='h-48 overflow-hidden rounded-2xl'>
                                                   <img className='w-full object-cover'
                                                       src={job.coverImage}
                                                       alt={job.title} />
                                               </figure>
               
                                               <div className='mt-3'>
                                                   <div className='flex justify-between items-center'>
                                                       <p className='font-bold'>{job.title}</p>
                                                       <div className="badge border-2 border-black px-2 py-4">
                                                           <p className='text-xs text-center'>{job.category}</p></div>
                                                   </div>
                                                   <div className="card-actions justify-start items-center mt-3">
               
                                                      

                                                       <div className="font-semibold">🙎‍♂️ {job.postedBy}</div>
               
                                                   </div>
                                               
                                                    <button onClick={() => handleDetailsBtn(job._id)} className='btn btn-primary hover:bg-black w-full mt-4'>View Details</button>
                                               </div>
                                           </div>
               
                                       )
                                   }
                               </div>
                
            </div>

        </div>
    );
};

export default AllJobs;