import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

import Features from "./components/features/features.jsx";
import Reviews from "./components/reviews/reviews.jsx";

const HomePage = lazy(() => import("./pages/homePage/homePage.jsx"));
const CatalogPage = lazy(() => import("./pages/catalogPage/catalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/camperDetailsPage/camperDetailsPage.jsx")
);

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
