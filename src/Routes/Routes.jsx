import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoutes from "./Public/PublicRoutes";
import InnerContent from "./innerContents/InnerContent";
import ProtectedRoutes from "./Protected/ProtectedRoutes";
import PermissionDenied from "../components/Pages/Payments/PermissionDenied";

import Profile from "../pages/appStack/profile";
import Register from "../pages/authStack/Register/Register";
import Dashboard from "../pages/appStack/dashboard/dashboard";
import SidebarNavbarWrapper from "../components/Layouts/SidebarNavbarWrapper";

import Login from "../pages/authStack/Auth/Login";


const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route element={<SidebarNavbarWrapper />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="tabs" element={<Tabs props={{ userName: "BigNova" }} />}>
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />} />

            <Route
              path="tab2"
              element={<ProtectedRoutes roleRequired="USER" />}
            >
              <Route path="/tabs/tab2" element={<Tab2 />} /> 
            </Route>

            <Route path="tab3" element={<Tab3 />} />
          </Route> */}

          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/plans" element={<PermissionDenied />} />

    </Route>

    {/** Public Routes */}
    <Route path="login" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
    </Route>
    <Route path="register" element={<PublicRoutes />}>
      <Route path="/register" element={<Register />} />
    </Route>
    {/** Permission denied route */}
    <Route path="/denied" element={<PermissionDenied />} />
  </Routes>
);

export default MainRoutes;
