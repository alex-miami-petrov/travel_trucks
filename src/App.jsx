// import { Route, Routes } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import HomePage from "../src/pages/homePage/homePage.jsx";
// import CamperDetailsPage from "../src/pages/camperDetailsPage/camperDetailsPage.jsx";
// import CatalogPage from "../pages/catalogPage/catalogPage.jsx";

// import Features from "./components/features/features.jsx";
// import Reviews from "./components/reviews/reviews.jsx";

// export const App = () => {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/catalog" element={<CatalogPage />} />
//         <Route path="/catalog/:id" element={<CamperDetailsPage />}>
//           <Route path="features" element={<Features />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//       </Routes>
//     </Layout>
//   );
// };

// export default App;

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
