import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 - Сторінка не знайдена</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;
