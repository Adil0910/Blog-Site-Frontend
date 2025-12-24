import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from 'react'

function ProtectedRoutes({children}) {
    const isAuth =useSelector((state)=>state.auth.isAuth)

if(isAuth){
    return <Navigate to='/login' replace/>;

}

  return children;
}

export default ProtectedRoutes;
