import React, { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";
// import Container from "../utils/container/container.jsx";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Outlet />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
    // <>
    //   <Container>
    //     <AppBar />
    //     <Outlet />
    //     <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    //   </Container>
    // </>
  );
};
