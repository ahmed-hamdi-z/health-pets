import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../config";
import { About } from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Loading from "../pages/Loading";

// const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home"));
// const About = lazy(() => import("../pages/About"));
// const Products = lazy(() => import("../pages/Products"));
// const Blogs = lazy(() => import("../pages/Blogs"));
// const Treatments = lazy(() => import("../pages/Treatments"));
// const Contact = lazy(() => import("../pages/Contact"));
// const Articles = lazy(() => import("../pages/Articles"));

export default function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.about} element={<About />} />
        <Route path={appRoutes.contact} element={<Contact />} />
        <Route path={appRoutes.blogs} element={<Blogs />} />
        <Route path={appRoutes.products} element={<Products />} />
        <Route path={appRoutes.services} element={<Services />} />
        <Route path="*" element={<NotFound />} />


        {/*
        <Route
          path={`${appRoutes.blogs}${appRoutes.articlesQuery.path}`}
          element={<Articles />}
        />
        <Route path={appRoutes.treatments} element={<Treatments />} />
        */}
      </Routes>
    </Suspense>
  );
}
