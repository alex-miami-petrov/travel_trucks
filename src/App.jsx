// import { Route, Routes } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import HomePage from "./pages/homePage/homePage.jsx";
// import CatalogPage from "./pages/catalogPage/catalogPage.jsx";
// import CamperDetailsPage from "./pages/camperDetailsPage/camperDetailsPage.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";
// import Features from "./components/features/features.jsx";
// import Reviews from "./components/reviews/reviews.jsx";

// const HomePage = lazy(() => import("./pages/homePage/homePage.jsx"));
// const CatalogPage = lazy(() => import("./pages/catalogPage/catalogPage.jsx"));
// const CamperDetailsPage = lazy(() =>
//   import("./pages/camperDetailsPage/camperDetailsPage.jsx")
// );

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
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Layout>
//   );
// };

// export default App;

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage.jsx";
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
