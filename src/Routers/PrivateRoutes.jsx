import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {Navigate} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {users,loading} = useContext(AuthContext);

    if(users)
    {
        return children;
    }
    if(loading)
    {
        return;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;