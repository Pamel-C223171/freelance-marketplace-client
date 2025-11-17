import React, { use, useRef } from 'react';
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import bannerimg from '../../assets/freelancebanner.jpg'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const Home = () => {
    const jobs = useLoaderData();
    // const jobs = data;
    const categories = [...new Set(jobs.map(job => job.category))];
    // console.log(categories)
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const boxRef = useRef();

    useGSAP(() => {
        const t1 = gsap.timeline({repeat:1, yoyo:true})
        const t2 = gsap.timeline({repeat:Infinity, yoyo:true})
        const t3 = gsap.timeline({repeat:Infinity, yoyo:true})

        t1.to('.animation', {duration:2, scale:0.3, color:'#d1b787'});
        t2.to('.animationtop', {duration:4, scale:1.2, color:'#000000'});
        t3.to('.animationbtn', {duration:2, scale:1.2});
    })


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
        <div className={`py-14 bg-base-100 `}>
            {/* banner section bg-gradient-to-r from-[#5f0b5f] via-[#992699] to-[#5f0b5f] */}
            <div className={`relative   py-20`}>
                <div className='absolute  inset-0 bg-cover bg-center opacity-50' style={{backgroundImage: `url(${bannerimg})`}}>
                </div>

                    <div ref={boxRef} className=' flex flex-col items-center '>

                        <h1 className="animation  text-[#363958] text-5xl text-center  font-bold text-black"><span className="animation text-[#ecb247] text-5xl bebas">Reliable Marketplace </span><br />for Local Jobs </h1>
                        <p className="text-center mt-3 "> Discover the perfect job or hire talented people easily. Join our
                            platform today!</p>
                        <button onClick={handleCreateJob} className="animationbtn mt-5 btn btn-primary hover:bg-black z-10">Create a Job</button>
                    </div>

                
            </div>

            {/* latest Jobs */}
            <div className='mt-14 w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Latest Jobs</h2>
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        jobs.map(job =>
                            <div className="card bg-base-100 border-4 border-black shadow-lg p-3 hover:scale-105 transition ease-in-out flex flex-col justify-between h-full">
                                <figure className='h-48 overflow-hidden rounded-2xl'>
                                    <img className='w-full object-cover'
                                        src={job.coverImage}
                                        alt={job.title} />
                                </figure>

                                <div className='mt-3'>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold '>{job.title}</p>
                                        <div className="badge border-2 border-black rounded-full py-4 ">
                                            <p className='text-xs text-center '>{job.category}</p></div>
                                    </div>
                                    <div className="card-actions justify-start items-center mt-3">

                                       
                                        <div className="font-semibold ">🙎‍♂️ {job.postedBy}</div>

                                    </div>
                                  
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

            <div className='w-11/12 mx-auto my-14'>
                <h2 className='font-bold text-3xl'>Top Categories</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 '>
                    {
                        categories.map((cat, index) => (
                            <div key={index} className=' flex flex-col items-center border-4 border-black p-4 shadow-lg rounded-xl hover:scale-105 transition-transform'>
                                <p className='animationtop font-semibold text-center'>{cat}</p>
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;