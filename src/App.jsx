import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/homePage/homePage.jsx"));
const CatalogPage = lazy(() => import("./pages/catalogPage/catalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/camperDetailsPage/camperDetailsPage.jsx")
);
const Features = lazy(() => import("./components/features/features.jsx"));
const Reviews = lazy(() => import("./components/reviews/reviews.jsx"));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
