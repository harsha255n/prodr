import React, { useState } from 'react';
import axios from 'axios';
import './AddStock.css';

function AddStock() {
  const [productVariantId, setProductVariantId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      product_variant_id: productVariantId,
      quantity: parseInt(quantity, 10)
    };
    axios.post('http://localhost:8000/api/add', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Add Stock</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Variant ID:
          <input type="number" value={productVariantId} onChange={(event) => setProductVariantId(event.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
}

export default AddStock;