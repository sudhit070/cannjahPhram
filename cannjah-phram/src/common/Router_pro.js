import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./UserLayout";
import { AdminLayout } from "./AdminLayout";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { ErrorPage } from "../pages/ErrorPage";
import { Profile } from "../pages/Profile";
import { AgeVerification } from "../pages/AgeVerification";
import { SorryMessage } from "../pages/sorryMessage";
import { Medical } from "../pages/Medical";
import { ProductPage } from "../pages/Product";
import { Products } from "../pages/Products";
import { ProductDetails } from "../pages/ProductDetails";

// Product Details
import { BananaHammock } from "../features/ProductDetails/BananaHammock";
import { GorillaGlue } from "../features/ProductDetails/GorillaGlue";
import { GrapeDiamond } from "../features/ProductDetails/GrapeDiamond";


const pro_routers = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <AboutUs />,
      },
      {
        path: "contact/",
        element: <ContactUs />,
      },
      {
        path: "medical/",
        element: <Medical />,
      },
      {
        path: "products/",
        element: <Products />,
      },
      // {
      //   path: "product-detail/",
      //   element: <ProductDetails />,
      // },
      {
        path: "preproducts/",
        element: <ProductPage />,
      },

      {
        path: "Banana-Hammock/",
        element: <BananaHammock />,
      },
      {
        path: "Gorilla-Glue/",
        element: <GorillaGlue />,
      },
      {
        path: "Grape-Diamond/",
        element: <GrapeDiamond />,
      },

    ],
  },
  {
    path: "dashboard/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile/",
        element: <Profile />,
      },
    ],
  },
  {
    path: "verification/",
    element: <AgeVerification />,
    errorElement: <ErrorPage />,
  },
  {
    path: "failed-verification/",
    element: <SorryMessage />,
    errorElement: <ErrorPage />,
  },
]);

export default pro_routers;
