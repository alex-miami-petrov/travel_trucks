import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./src/pages/homePage";
import CatalogPage from "../src/pages/catalogPage";
import CamperDetailsPage from "../src/pages/camperDetailsPage";

import Features from "./components/features/features.jsx";
import Reviews from "./components/reviews/reviews.jsx";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
