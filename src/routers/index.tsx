import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../config";
import Loading from "../pages/Loading"; 

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Articles = lazy(() => import("../pages/Articles"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.about} element={<About />} />
        <Route path={appRoutes.blogs} element={<Blogs />} />
        <Route
          path={`${appRoutes.blogs}${appRoutes.articlesQuery.path}`}
          element={<Articles />}
        />
        <Route path={appRoutes.products} element={<Products />} />
        <Route path={appRoutes.services} element={<Services />} />
        <Route path={appRoutes.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}