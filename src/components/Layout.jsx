import React, { Suspense } from "react";
import { AppBar } from "./appBar/appBar";
import { Outlet } from "react-router-dom";
import Loader from "../utils/loader/loader.jsx";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Outlet />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
