import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivetRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
      return  <Navigate  to='/login' state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoutes;