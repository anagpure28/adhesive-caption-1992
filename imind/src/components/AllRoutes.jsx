import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import Blog from "../pages/Blog";
import RelaxMusicPage from '../pages/RelaxMusicPage';
import { NatureSound } from "../pages/NatureSound";
import PremiumOfferPage from "../pages/PremiumOfferPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/relax-music' element={<RelaxMusicPage />} />
      <Route path='/nature-sound' element={<NatureSound />} />
      <Route path='/premium' element={<PremiumOfferPage />} />
    </Routes>
  );
};
