import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CustomerManagement from './components/CustomerManagement';
import ProductManagement from './components/ProductManagement';
import TransactionManagement from './components/TransactionManagement';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/customers" element={<CustomerManagement />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/transactions" element={<TransactionManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
