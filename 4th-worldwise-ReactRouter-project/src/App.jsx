import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/app" element={<AppLayout />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default App;
