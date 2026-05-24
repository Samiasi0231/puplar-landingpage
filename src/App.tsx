import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/about";
import Product from "./pages/product";
import { LandingHeader } from "@/layout/landing-header";
import { LandingFooter } from "@/layout/landing-footer";

function AppContent() {
  const location = useLocation();

  const active = location.pathname === "/about" ? "about" : "product";

  return (
    <>
      <LandingHeader active={active} />
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <LandingFooter />
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
