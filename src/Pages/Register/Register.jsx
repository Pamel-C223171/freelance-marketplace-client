import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from './../../Contexts/AuthContext/AuthContext';
import  axios  from 'axios';

const Register = () => {
    const [nameError, setNameError] = useState("");
    const [error, setError] = useState("")
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {

        try {
            const result = await signInWithGoogle();
            const googleUser = result.user;

            const newUser = {
                name: result.user.displayName,
                email: result.user.email,
                PhotoURL: result.user.photoURL
            }

            const existingUsers = await axios.get(`http://localhost:3000/users?email=${googleUser.email}`);

            if (existingUsers.data.length === 0) {
                await axios.post('http://localhost:3000/users', newUser)
            }

            setUser(googleUser);
            toast.success('Registration Successfull!', {
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

            navigate('/');
        }
        catch (error) {
            console.log(error);
            setError(error.message);
        }

    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 character");
            return;
        }
        else {
            setNameError("");
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setPasswordError("Password must be at least 6 character and include upper, lower case and one special character");
            return;
        }

        try {
            const result = await createUser(email, password);
            const user = result.user;

            const existingUsers = await axios.get(`http://localhost:3000/users?email=${email}`);

            if (existingUsers.data.length === 0) {
                const newUser = { name, email, photoURL: photo };
                await axios.post('http://localhost:3000/users', newUser);
            }
            toast.success('Registration Successfull!', {
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

            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
        }

        catch (error) {
            console.log(error);
            setError(error.message);
        }
    }

    return (
        <div>
            <div className="bg-base-100 min-h-screen flex items-center justify-center py-10">

                <div className="card bg-base-300 w-11/12 md:w-full max-w-xl  shadow-2xl p-10">
                    <h1 className="text-4xl font-bold text-center mb-6">Register now!</h1>
                    <div className="">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset space-y-2">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input input-bordered w-full" placeholder="Name" required />
                                {
                                    nameError && <p className='text-red-600 text-xs'>{nameError}</p>
                                }
                                <label className="label">Photo URL</label>
                                <input name='photo' type="text" className="input input-bordered w-full" placeholder="Photo URL" required />
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input input-bordered w-full" placeholder="Email" required />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input name='password' type={showPassword ? "text" : "password"} className="input input-bordered w-full" placeholder="Password" required />
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-2 right-5">{showPassword ? "Hide" : "Show"}</button>
                                </div>
                                {
                                    error && <p className='text-red-600 text-xs'>{error}</p>
                                }
                                {
                                    passwordError && <p className='text-red-600 text-xs'>{passwordError}</p>
                                }
                                <button type="submit" className="btn btn-primary hover:bg-black w-full mt-4">Register</button>
                                <p className="font-semibold text-center pt-5">
                                    Already Have An Account ?{" "}
                                    <Link className="text-red-600" to="/login">
                                        LogIn
                                    </Link>
                                </p>
                                <button type='button' onClick={handleGoogleSignIn} className='btn btn-primary hover:bg-black w-1/2 mx-auto mt-4'>Sign Up with Google</button>
                            </fieldset>
                        </form>
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

export default Register;