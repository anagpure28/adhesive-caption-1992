import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import Blog from "../pages/Blog";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};
