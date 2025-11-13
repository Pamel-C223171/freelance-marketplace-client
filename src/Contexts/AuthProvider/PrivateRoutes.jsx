import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log("private", location)


    if (loading) {
        return <div className='min-h-screen flex justify-center'><span className="loading loading-spinner loading-xl">Loading</span></div>
    }



    if (user && user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoutes;