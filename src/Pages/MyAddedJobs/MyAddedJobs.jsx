import React, { use } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const MyAddedJobs = () => {

    const jobs = useLoaderData();
    const { user } = use(AuthContext);

    const myJobs = jobs.filter(job => job.userEmail === user?.email);
    console.log(myJobs);

    const handleDeleteBtn = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/jobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete job', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    // const handleUpdateBtn = () => {

    //     toast.success('Update to the job Successful!', {
    //         position: "top-center",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });

    // }

    const handleUpdateJob = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const summary = form.summary.value;
        // console.log({ title, category, photo, summary });

        const updateJob = {
            title: title,
            category: category,
            summary: summary,
            coverImage: photo,
        }

        fetch(`http://localhost:3000/jobs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('after added job', data);
                if (data.modifiedCount > 0) {
                    toast.success('Update to the job Successful!', {
                        position: "top-right",
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
                else {
                    toast.success('No changes!', {
                        position: "top-right",
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
            })



    }


    return (
        <div className='my-14 w-11/12 mx-auto'>
            <h2 className='font-bold text-center text-3xl mb-8'>My Added Job</h2>
            <div>
                {myJobs.length > 0 ?

                    (<div className="overflow-x-auto ">
                        <table className="table text-center">
                            {/* head */}
                            <thead>
                                <tr className='text-black'>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Job</th>
                                    <th>Status</th>
                                    <th>Activities</th>
                                </tr>
                            </thead>
                            {
                                myJobs.map((job, index) => <tbody className='text-center rounded-2xl'>
                                    {/* row 1 */}

                                    <tr className='bg-white shadow-2xl border-b-2 border-base-300'>
                                        <th className='mx-auto text-2xl'>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar mx-auto">
                                                    <div className="mask mask-squircle h-15 w-15">
                                                        <img
                                                            src={job.coverImage}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.category}</div>
                                            </div>
                                        </td>
                                        <td><button className="btn btn-ghost btn-xs bg-green-500 mr-2">{job.status}</button></td>
                                        <th>
                                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn btn-ghost btn-xs bg-blue-500 hover:bg- hover:text-white hover:bg-black mr-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <div>
                                                        <div className="min-h-screen flex items-center justify-center">

                                                            <div className="card bg-base-100 w-11/12 md:w-full max-w-xl  shadow-2xl p-10">
                                                                <h1 className="text-4xl font-bold text-center mb-6">Update To The Job</h1>
                                                                <div className="">
                                                                    <form onSubmit={(e) => handleUpdateJob(e, job._id)}>
                                                                        <fieldset className="fieldset space-y-2">

                                                                            <label className="label">Job Title</label>
                                                                            <input name='title' type="text" className="input input-bordered w-full" defaultValue={job.title} required />


                                                                            <label className="label">Category</label>
                                                                            <select name='category' defaultValue={job.category} className="select appearance-none w-full">
                                                                                <option disabled={true}>Select Job Category</option>
                                                                                <option>Web Development</option>
                                                                                <option>Mobile App Development</option>
                                                                                <option>Graphic Design</option>
                                                                                <option>Digital Marketing</option>
                                                                                <option>Content Writing</option>
                                                                            </select>

                                                                            <label className="label">Cover Image</label>
                                                                            <input name='photo' type="text" className="input input-bordered w-full" placeholder="Enter Job Image URL" required />



                                                                            <label className="label hidden">Posted Date</label>
                                                                            <input name='date' type='text' defaultValue={new Date().toISOString()} className="input hidden input-bordered w-full" required />

                                                                            <div className='w-full mx-auto'>
                                                                                <label className="label mb-2">Summary</label>
                                                                                <textarea defaultValue={job.summary} name="summary" rows="5" className='w-full border-2 pl-3 border-base-300 rounded-xl resize-none' required></textarea>
                                                                            </div>

                                                                            <button type="submit" className="btn btn-primary hover:bg-black hover:text-white w-full mt-4">Update</button>

                                                                        </fieldset>
                                                                    </form>

                                                                   

                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-primary hover:bg-black hover:text-white">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                            <button onClick={() => handleDeleteBtn(job._id)} className="btn btn-ghost btn-xs bg-red-500 mt-2 md:mr-2 hover:bg-black hover:text-white md:mt-0">Delete</button>
                                        </th>
                                    </tr>


                                </tbody>)}

                        </table>

                        <ToastContainer
                            position="bottom-right"
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

                    </div>)
                    :
                    (
                        <div>
                            <p className='text-center font-semibold'>You haven't added any jobs yet.</p>
                            <div className=' mt-10 flex justify-center'>
                <NavLink to='/'><button className='btn btn-primary hover:bg-black'>⬅ Back to Home</button></NavLink>
            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyAddedJobs;