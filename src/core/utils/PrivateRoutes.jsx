import { React } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  //todo: checar usuario 
  const token = true;

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
