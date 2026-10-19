import React, { useEffect } from "react";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio";
function PageTracking() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window.gtag === "function" && settings.googleTrackingID) {
      window.gtag("config", settings.googleTrackingID, {
        page_path: pathname,
        page_location: window.location.href,
      });
    }
  }, [pathname]);
  return null;
}
export default function Main(props) {
  return (
    <HashRouter>
      <PageTracking />
      <Routes>
        <Route
          path="/"
          element={
            settings.isSplash ? <Splash {...props} /> : <Home {...props} />
          }
        />
        <Route path="/home" element={<Home {...props} />} />
        <Route path="/projects" element={<Projects {...props} />} />
        <Route path="/education" element={<Education {...props} />} />
        <Route path="/experience" element={<Experience {...props} />} />
        <Route path="/contact" element={<Contact {...props} />} />
        {settings.isSplash && (
          <Route path="/splash" element={<Splash {...props} />} />
        )}
        <Route path="*" element={<Home {...props} />} />
      </Routes>
    </HashRouter>
  );
}
