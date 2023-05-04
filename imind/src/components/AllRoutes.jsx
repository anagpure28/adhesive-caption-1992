import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import RelaxMusicPage from '../pages/RelaxMusicPage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/relax-music' element={<RelaxMusicPage />} />
    </Routes>
  )
}
