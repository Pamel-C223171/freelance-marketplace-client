import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';

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
                                            <button className="btn btn-primary btn-xs mr-2">Update</button>
                                            <button onClick={() => handleDeleteBtn(job._id)} className="btn btn-ghost btn-xs bg-red-500 mt-2 md:mr-2 md:mt-0">Delete</button>
                                        </th>
                                    </tr>


                                </tbody>)}

                        </table>
                    </div>)


                    // myJobs.length > 0 ? (
                    //     <div>
                    //         <ul className="list bg-base-100 rounded-box shadow-md">

                    //             {
                    //                 myJobs.map((job, index) => <li className="list-row">
                    //                 <div className="text-4xl font-thin opacity-30 tabular-nums">{index + 1}</div>
                    //                 <div><img className="size-10 rounded-box" src={job.coverImage} /></div>
                    //                 <div className="list-col-grow">
                    //                     <div>{job.title}</div>
                    //                     <div className="text-xs uppercase font-semibold opacity-60">{job.category}</div>
                    //                 </div>
                    //                 <button className="btn btn-square btn-ghost">
                    //                     <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    //                 </button>
                    //             </li>)
                    //             }

                    //         </ul>
                    //     </div>
                    // ) 
                    :
                    (
                        <div>
                            <p>You haven't added any jobs yet.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyAddedJobs;