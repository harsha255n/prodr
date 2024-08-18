
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteProduct = ({ productId, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete `);
      if (response.status === 200) {
        onDelete(productId);
      } else {
        setError('Failed to delete product');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Deleting...</p>
      ) : (
        <button onClick={handleDelete}>Delete Product</button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DeleteProduct;