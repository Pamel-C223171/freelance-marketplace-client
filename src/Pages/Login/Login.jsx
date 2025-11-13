import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, setUser, signInWithGoogle } = use(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
         .then(result => {
                const user = result.user;
                setUser(user)
                // fetch('http://localhost:3000/users', {
                //     method: 'POST',
                //     headers:{
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         name: user.displayName,
                //         email: user.email,
                //         photoURL: user.photoURL,
                //     })
                //     .then(res => res.json)
                //     .then(data => console.log(data))
                // })
                toast.success('Login Successful!', {
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
                // toast.success("LogIn Successful");
                // alert("login Success")

                navigate(`${location.state ? location.state : "/"}`);
                // navigate(location.state?.from || "/");
                // navigate(location.state?.from?.pathname || "/");


            })
            .catch((error) => {
                console.log(error);
                setError(error.code);

                toast.success('Google SignIn Failed!', {
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
                
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                 setUser(user)
                // fetch('http://localhost:3000/users', {
                //     method: 'POST',
                //     headers:{
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         name: user.displayName,
                //         email: user.email,
                //         photoURL: user.photoURL,
                //     })
                //     .then(res => res.json)
                //     .then(data => console.log(data))
                // })
                toast.success('Login Successful!', {
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
                // toast.success("LogIn Successful");
                // alert("login Success")

                navigate(`${location.state ? location.state : "/"}`);
                // navigate(location.state?.from || "/");
                // navigate(location.state?.from?.pathname || "/");


            })
            .catch((error) => {
                console.log(error);
                setError(error.code);
            })
    }

   
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <div className='relative'>
                                    <input name='password' type={showPassword ? "text" : "password"} className="input input-bordered w-full" placeholder="Password" required />
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-2 right-5">{showPassword ? "Hide" : "Show"}</button>
                                </div>
                                    <div><Link className="link link-hover">Forgot password?</Link></div>
                                    {
                                        error && <p className='text-red-600 text-xs'>{error}</p>
                                    }
                                    <button className="btn btn-primary hover:bg-black mt-4">Login</button>
                                    <p className="font-semibold text-center pt-5">
                                        Dont’t Have An Account ?{" "}
                                        <Link className="text-secondary" to="/register">
                                            Register
                                        </Link>
                                    </p>
                                     <button onClick={handleGoogleSignIn} type='button' className='btn btn-primary hover:bg-black mx-auto mt-4'>Sign In with Google</button>
                                </fieldset>
                            </form>
                        </div>
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

export default Login;