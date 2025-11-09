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
        <div className="navbar bg-base-100 shadow-sm md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 w-20 p-2 shadow">
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
                    user ? <NavLink onClick={handleLogout} to={'/login'}><button className="btn btn-primary">LogOut</button></NavLink> : <NavLink to={'/login'}><button className="btn btn-primary">LogIn</button></NavLink>
                }

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