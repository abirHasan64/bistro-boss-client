import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex flex-row justify-center items-center min-h-screen">
        <p className="text-2xl font-extrabold text-gray-500 mr-2 my-auto">Loading</p>
        <span className="loading loading-dots loading-lg animate-bounce"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
