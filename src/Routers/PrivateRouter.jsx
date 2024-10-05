import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return (
          <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        );
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRouter;