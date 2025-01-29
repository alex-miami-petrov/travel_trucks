// import { lazy, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";
// import { Route, Routes } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import { PrivateRoute } from "./components/PrivateRoute";
// import { RestrictedRoute } from "./components/RestrictedRoute";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
// const RegistrationPage = lazy(() =>
//   import("./pages/RegistrationPage/RegistrationPage.jsx")
// );
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
// const ContactsPage = lazy(() =>
//   import("./pages/ContactsPage/ContactsPage.jsx")
// );

// export const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/contacts"
//               component={<RegistrationPage />}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//           }
//         />
//       </Routes>
//     </Layout>
//   );
// };

// export default App;

import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
// import { PrivateRoute } from "./components/PrivateRoute";
// import { RestrictedRoute } from "./components/RestrictedRoute";
// import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("./pages/homePage/homePage.jsx"));
const CatalogPage = lazy(() => import("./pages/catalogPage/catalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/camperDetailsPage/camperDetailsPage.jsx")
);

export const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route
    //       path="/register"
    //       element={
    //         <RestrictedRoute
    //           component={<RegistrationPage />}
    //           redirectTo="/contacts"
    //         />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
    //       }
    //     />
    //     <Route
    //       path="/contacts"
    //       element={
    //         <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
    //       }
    //     />
    //   </Routes>
    // </Layout>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
