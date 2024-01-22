import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = (props) => {
  const { isAuth, result } = useSelector((state) => state.auth);

  if (props.roleRequired) {
    return isAuth ? (
      props.roleRequired === result?.data?.role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
