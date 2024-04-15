import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import PromotePage from './pages/PromotePage';
import ProductPage from './pages/ProductPage';
import DashboardPage from './pages/DashboardPage';
import IncomePage from './pages/IncomePage';
import HelpPage from './pages/HelpPage';
import { Layout } from './componens/layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="income" element={<IncomePage />} />
          <Route path="promote" element={<PromotePage />} />
          <Route path="help" element={<HelpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
