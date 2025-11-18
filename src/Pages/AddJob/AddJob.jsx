import React, { use, useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import axios  from 'axios';

const AddJob = () => {

    const { user } = use(AuthContext);
    const [loading, setLoading] = useState(false);


    // const handleAddBtn = () => {

    //     toast.success('Add to the job Successful!', {
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

    const handleAddJob = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const date = form.date.value;
        const summary = form.summary.value;
        // console.log({ title, name, category, photo, email, date, summary });

        const newJob = {
            title: title,
            postedBy: name,
            category: category,
            summary: summary,
            coverImage: photo,
            userEmail: email,
            postedAt: date,
            acceptedBy: null,
            status: "open"
        }

        try{
            setLoading(true);
             await axios.post('https://freelance-marketplace-server-theta.vercel.app/jobs', newJob);
             toast.success('Add to the job Successful!', {
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
        
        form.reset();

        }
        catch(error){
            console.log(error);
            setLoading(false);
        }

    }

     if(loading){
        return <div className='min-h-screen flex justify-center'><span className="loading loading-spinner loading-xl">Loading...</span></div>
    }


    return (
        <div className='bg-base-100'>
            <div className="min-h-screen  flex items-center justify-center py-14">

                <div className="card bg-base-100 w-11/12 md:w-full max-w-xl shadow-2xl p-10">
                    <h1 className="text-4xl font-bold text-center mb-6">Added To The Job</h1>
                    <div className="">
                        <form onSubmit={handleAddJob}>
                            <fieldset className="fieldset space-y-2">

                                <label className="label">Job Title</label>
                                <input name='title' type="text" className="input input-bordered w-full" placeholder="Enter Job Title" required />

                                <label className="label">Posted By</label>
                                <input name='name' defaultValue={user.displayName} type="text" className="input input-bordered w-full" />

                                <label className="label">Category</label>
                                <select name='category' defaultValue="Select Job Category" className="select appearance-none w-full" required>
                                    <option disabled={true}>Select Job Category</option>
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>Graphic Design</option>
                                    <option>Digital Marketing</option>
                                    <option>Content Writing</option>
                                </select>

                                <label className="label">Cover Image</label>
                                <input name='photo' type="text" className="input input-bordered w-full" placeholder="Enter Job Image URL" required />

                                <label className="label">Email</label>
                                <input name='email' defaultValue={user.email} readOnly type="email" className="input input-bordered w-full" />

                                <label className="label hidden">Posted Date</label>
                                <input name='date' type='text' value={new Date().toISOString()} className="input input-bordered w-full hidden"  readOnly />

                                <div className='w-full mx-auto'>
                                    <label className="label mb-2">Summary</label>
                                    <textarea name="summary" rows="5" className='w-full border-2 pl-3 border-base-300 rounded-xl resize-none' required></textarea>
                                </div>

                                <button type="submit"  className="btn btn-primary hover:bg-black w-full mt-4">Add </button>

                            </fieldset>
                        </form>

                        <Link to='/myaddedjobs'><button className='btn btn-primary hover:bg-black w-full mt-5'>My Added Job</button></Link>

                    </div>
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

export default AddJob;