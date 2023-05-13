import React from 'react';
import { Route, Routes } from "react-router-dom";
import Description from "./description/Description";
import Home from './home/Home';
const AlllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task/:id' element={<Description />} />
      </Routes>
    </div>
  )
};

export default AlllRoutes