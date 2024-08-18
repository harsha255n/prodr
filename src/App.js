import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import AddStock from './AddStock';
import DeleteProduct from './DeleteProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/add-stock" element={<AddStock />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
