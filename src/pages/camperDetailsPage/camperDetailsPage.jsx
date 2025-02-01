import React from "react";
import Details from "../../components/details/details.jsx";
import { Outlet } from "react-router-dom";

const CamperDetailsPage = () => {
  return (
    <>
      <Details />
      <Outlet />
    </>
  );
};

export default CamperDetailsPage;
