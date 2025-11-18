import React, { use, useEffect, useState } from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import axios  from 'axios';
import doneimg from '../../assets/done.png'
import cancelimg from '../../assets/cancel.png'

const MyAcceptedTasks = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    const { user } = use(AuthContext);
    const [loading, setLoading] =  useState(false);
    const myJobs = jobs.filter(job => job.acceptedBy === user?.email);
    // console.log(myJobs);
    const [myAcceptJobs, setMyAcceptJobs] = useState(myJobs);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/login');
        }
    }, [user]);

    const handleDelete = async (id, type) => {
        const confirm = await Swal.fire({
            title: type === 'done' ? 'mark as done?' : 'cancel this job?',
            text: 'this action cannot be undone!',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'yes'
        });

        if (confirm.isConfirmed) {
            try {
                setLoading(true);
                const res = await axios.delete(`https://freelance-marketplace-server-theta.vercel.app/jobs/${id}`);

                if (res.data.deletedCount) {
                    setMyAcceptJobs(prev => prev.filter(job => job._id !== id));
                    toast.success(type === 'done' ? 'Job mark as done?' : 'Job cancelled!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setLoading(false);

                }

            }
            catch(error){
                console.log(error);
                toast.error('something went wrong', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setLoading(false);
            }
        
        }

    }

     if(loading){
        return <div className='min-h-screen flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
    }

    return (
       <div className='bg-base-100 pb-14'>
         <div className='py-14 w-11/12 mx-auto '>
            <h2 className='text-4xl font-bold text-center'>My Accepted Jobs</h2>
            {
                myAcceptJobs.length > 0 ? (
                    <div className='mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            myAcceptJobs.map(job =>
                                <div key={job._id} className="card bg-base-300  shadow-2xl p-3 hover:scale-105 transition ease-in-out">
                                    <figure className='h-48 overflow-hidden rounded-2xl'>
                                        <img className='w-full object-cover'
                                            src={job.coverImage}
                                            alt="Shoes" />
                                    </figure>

                                    <div className='mt-3'>
                                        <div className='flex justify-between items-center'>
                                            <p className='font-bold '>{job.title}</p>
                                            <div className="badge border-2 border-black px-2 py-4 rounded-full">
                                                <p className='text-xs text-center '>{job.category}</p></div>
                                        </div>
                                        <div className="card-actions justify-start items-center mt-3">

                                            
                                            <div className="font-semibold ">🙎‍♂️ {job.postedBy}</div>

                                        </div>
                                        <div className='flex items-center justify-between mt-5'>
                                            <button onClick={() => handleDelete(job._id, 'done')} className='btn btn-primary hover:bg-black'><img className='w-[30px] h-[30px]' src={doneimg} alt="" />Done</button>
                                            <button onClick={() => handleDelete(job._id, 'cancel')} className='btn btn-primary hover:bg-black'><img className='w-[30px] h-[30px]' src={cancelimg} alt="" />Cancel</button>
                                        </div>

                                    </div>
                                </div>

                            )
                        }
                    </div>
                ) : (<div className='text-center mt-10'>
                    <p className='font-semibold text-xl'>You haven't accept any jobs yet.</p>
                </div>)
            }
            <div className=' mt-10 flex justify-center'>
                <NavLink to='/'><button className='btn btn-primary hover:bg-black'>⬅ Back to Home</button></NavLink>
            </div>
            <ToastContainer
                            position="bottom-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
                        />
        </div>
       </div>
    );
};

export default MyAcceptedTasks;