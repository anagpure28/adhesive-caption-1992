import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import Blog from "../pages/Blog";
import RelaxMusicPage from "../pages/RelaxMusicPage";
import { NatureSound } from "../pages/NatureSound";
import PremiumOfferPage from "../pages/PremiumOfferPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import AdminLoginForm from "./AdminPageComponents/AdminLoginForm";
import Admin from "../pages/Admin";
import PageNotFound from "../pages/PageNotFound";
import SignupPage from "../pages/SignupPage";
import Login from "../pages/Login";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
      <Route path="/relax-music" element={<RelaxMusicPage />} />
      <Route path="/nature-sound" element={<NatureSound />} />
      <Route path="/premium" element={<PremiumOfferPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin-login" element={<AdminLoginForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
