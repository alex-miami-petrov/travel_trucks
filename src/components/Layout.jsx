// import { Suspense } from "react";
// import { Outlet } from "react";
// import { AppBar } from "./AppBar/AppBar";

// export const Layout = ({ children }) => {
//   return (
//     <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
//       <AppBar />
//       <Suspense fallback={null}>{children}</Suspense>
//     </div>
//   );
// };

import React, { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Outlet />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};
//  style={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       padding: "0 16px",
//     }}
