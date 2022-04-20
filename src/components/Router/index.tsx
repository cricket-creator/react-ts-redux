import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Gallery from '../../layouts/Gallery';
import About from '../../layouts/About';
import PictureDetails from '../../layouts/PictureDetails';
import CategoryList from '../CategoryList';

function Router() {
  return (
    <div className="container pt-3 pb-3">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<CategoryList />} />
        <Route path="/detail/:id" element={<PictureDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default Router;