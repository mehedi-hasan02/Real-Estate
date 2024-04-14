import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {users,loading} = useContext(AuthContext);
    
    console.log(users);

    
    if(users)
    {
        return children;
    }
    if(loading)
    {
        return (
            <div className='text-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoutes;