import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import RestaurantInfo from "./components/RestaurantInfo.js";
import ErrorPage from "./components/ErrorPage.js";
// import Glocery from "./components/Glocery.js";

const Glocery = lazy(() => import("./components/Glocery.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/glocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Glocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant-info/:resId",
        element: <RestaurantInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
