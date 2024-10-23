import React from "react";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import PageNext from "./components/PageNext";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <PageNext />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
