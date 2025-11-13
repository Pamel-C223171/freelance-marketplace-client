import React, { use } from 'react';
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import bannerimg from '../../assets/freelancebanner.jpg'


const Home = () => {
    const data = useLoaderData();
    const jobs = data;
    const categories = [...new Set(jobs.map(job => job.category))];
    // console.log(categories)
    const { user } = use(AuthContext);
    const navigate = useNavigate();


    const handleDetailsBtn = (id) =>{
         if(!user){
            navigate('/login');
    }
    else{
        navigate(`/jobdetails/${id}`);
    }
    } 

    const handleCreateJob = () =>{
         if(!user){
            navigate('/login');
    }
    else{
        navigate(`/addjob`);
    }
    } 
   
    // console.log(data);
    return (
        <div className='my-14'>
            {/* banner section */}
            <div className='relative bg-gradient-to-r from-[#5f0b5f] via-[#992699] to-[#5f0b5f] py-20'>
                <div className='absolute inset-0 bg-cover bg-center opacity-30' style={{backgroundImage: `url(${bannerimg})`}}>
                </div>

                    <div className='flex flex-col items-center '>

                        <h1 className="text-[#363958] text-5xl text-center  font-bold text-black"><span className=" text-[#ecb247] text-5xl bebas">Reliable Marketplace </span><br />for Local Jobs </h1>
                        <p className="text-[#ffffff] text-center mt-3 "> Discover the perfect job or hire talented people easily. Join our
                            platform today!</p>
                        <button onClick={handleCreateJob} className="mt-5 btn btn-primary hover:bg-black z-10">Create a Job</button>
                    </div>

                
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

                                        {/* <div className=" text-black  "><img className="rounded-full  h-[25px] w-[25px]"
                                            alt="User Image"
                                            src={`${user?.photoURL || "https://th.bing.com/th/id/R.2fa57439a24f242faaf2333fe5e9e295?rik=ERIOJB6KU7TNYw&pid=ImgRaw&r=0"}`} /></div> */}
                                        <div className="font-semibold">🙎‍♂️ {job.postedBy}</div>

                                    </div>
                                    {/* <div className="card-actions justify-between mt-4">
                                        
                                    <div className="badge text-black bg-[#F1F5E8] "><img className="w-[15px] h-[15px]" src={priceimg} alt="" />{app.price}</div>
                                        <div className="badge text-[#00D390] bg-[#F1F5E8]">{job.status}</div>

                                    </div> */}
                                    {/* <NavLink to={`/jobdetails/${job._id}`} ><button onClick={handleDetailsBtn} className='btn btn-primary hover:bg-black w-full mt-4'>View Details</button></NavLink> */}
                                    <button onClick={() => handleDetailsBtn(job._id)} className='btn btn-primary hover:bg-black w-full mt-4'>View Details</button>

                                </div>
                            </div>

                        )
                    }
                </div>
                <div className=' mt-10 flex justify-center'>
                    <NavLink to='/alljobs'><button className='btn btn-primary hover:bg-black'>View All Jobs</button></NavLink>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-14'>
                <h2 className='font-bold text-3xl'>Top Categories</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 '>
                    {
                        categories.map((cat, index) => (
                            <div key={index} className='flex flex-col items-center p-4 bg-gradient-to-r from-[#5f0b5f] via-[#992699] to-[#5f0b5f] shadow-lg rounded-xl hover:scale-105 transition-transform'>
                                <p className='font-semibold text-white text-center'>{cat}</p>
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;