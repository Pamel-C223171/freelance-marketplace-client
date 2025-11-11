import React, { use } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const JobsDetails = () => {
    const data = useLoaderData();
    const { user } = use(AuthContext);
    const { id } = useParams();
    const jobs = data.find(job => String(job._id) === id)

    const handleTryBtn = (e) => {
        e.preventDefault();
        toast.success('Accepted!', {
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
    }

    return (
        <div className='w-11/12 md:w-2/3 py-14  mx-auto '>
            <div className="grid grid-cols-12 gap-8 ">
                <div className='col-span-12 md:col-span-8'>
                    <div className='border-b-2 border-gray-300'>
                        <p className='text-xs mb-2'>{jobs.category}</p>
                        <p className=" text-sm mb-3"><span className='text-3xl font-bold'>{jobs.title}</span></p>
                    </div>
                    <figure className=' overflow-hidden mt-5'>
                        <img className='mb-3 w-full '
                            src="https://tse1.mm.bing.net/th/id/OIP.xi_VY54V535hztHz11VTyQHaFL?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Shoes" />
                    </figure>
                </div>
                <div className='col-span-12 md:col-span-4 mt-18'>

                    <div className='w-full space-y-5'>
                        <div className='flex items-center gap-1'>
                            <p className='text-base font-semibold'>Posted By : <span className='font-normal'>{jobs.postedBy}</span></p>

                        </div>
                        <div className=''>
                            <p className='text-base font-semibold'>Posted By (Email) : <span className='font-normal'>{jobs.userEmail}</span></p>

                        </div>
                        <div className=''>
                            <p className='text-base font-semibold'>Accepted By : <span className='font-normal'>{jobs.acceptedBy}</span></p>

                        </div>
                        <div className=''>
                            <p className='text-base font-semibold'>Current Status : <span className='font-normal'>{jobs.status}</span></p>
                        </div>
                        <div className="">
                            <form onSubmit={handleTryBtn}>
                                <fieldset className="fieldset">
                                    <label className="label font-semibold text-black">Name</label>
                                    <input name='name' defaultValue={user.displayName} readOnly type="name" className="input" placeholder="Name" required />
                                    <label className="label font-semibold text-black">Email</label>
                                    <input name='email' type="email" defaultValue={user.email} readOnly className="input" placeholder="Email" required />
                                    <button className="btn btn-primary mt-5">Accept</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-10 border-t-2 border-gray-600  grid grid-cols-12'>
                <div className='col-span-12 md:col-span-8 '>
                    <h3 className='text-xl font-semibold mt-5'>Description</h3>
                    <p className='mt-2 '>{jobs.summary}</p>
                    <Link to='/' className='btn mt-5 btn-primary'>Back To Page</Link>
                </div>
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
    );
};

export default JobsDetails;