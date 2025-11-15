import React, { use } from 'react';
import { NavLink } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);


    const handleLogout = () => {
        // console.log(".....");
        logOut()
            .then(() => {
                toast.success('Login Successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-[#a868a8] shadow-sm md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#802680] rounded-box z-1 w-20 p-2 shadow">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"} >Home</NavLink></li>
                        <li><NavLink to='/alljobs' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"}>All Jobs</NavLink></li>
                        {
                            user &&
                            <>
                                <li><NavLink to='/addjob' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"}>Add a Job</NavLink></li>
                                <li><NavLink to='/myacceptedtasks' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"}>My Accepted Tasks</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <h2 className="font-bold text-xl">Freelance MarketPlace</h2>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"} >Home</NavLink></li>
                    <li><NavLink to='/alljobs' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"}>All Jobs</NavLink></li>
                    {
                        user &&
                        <>
                            <li><NavLink to='/addjob' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"}>Add a Job</NavLink></li>
                            <li><NavLink to='/myacceptedtasks' className={({ isActive }) => isActive ? "underline text-blue-600 font-bold" : "text-black font-bold"}>My Accepted Tasks</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {/* <NavLink to='/login'><button className="btn btn-primary">LogIn</button></NavLink> */}
                <div className="w-10 mr-5 relative group">
                    <img className="rounded-full border-2 border-base-600"
                        alt="User Image"
                        src={`${user?.photoURL || "https://th.bing.com/th/id/R.2fa57439a24f242faaf2333fe5e9e295?rik=ERIOJB6KU7TNYw&pid=ImgRaw&r=0"}`} />
                    {
                        user && (
                            <span className="absolute bottom-1/2 mb-1  transform px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 ">{user.displayName}</span>
                        )
                    }
                </div>

                {
                    user ? <NavLink onClick={handleLogout} to={'/login'}><button className="btn btn-primary hover:bg-black mr-2">LogOut</button></NavLink> : <NavLink to={'/login'}><button className="btn btn-primary hover:bg-black mr-2">LogIn</button></NavLink>
                }
                <svg className='md:hidden'
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>

                <label className="md:flex cursor-pointer gap-2 hidden md:block ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" value="synthwave" className="toggle bg-[#a868a8] theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>

            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
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

export default Navbar;