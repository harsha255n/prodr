import React, { useState } from 'react';
import axios from 'axios';
import './CreateProduct.css';

function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [variants, setVariants] = useState([]);
  const [subvariants, setSubvariants] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      description,
      variants: variants.map(variant => ({
        name: variant.name,
        subvariants: subvariants[variant.name]
      }))
    };
    axios.post('http://localhost:8000/api/create', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <label>
          Variants:
          <ul>
            {variants.map((variant, index) => (
              <li key={index}>
                <input type="text" value={variant.name} onChange={(event) => {
                  const newVariants = [...variants];
                  newVariants[index].name = event.target.value;
                  setVariants(newVariants);
                }} />
                <ul>
                  {subvariants[variant.name].map((subvariant, subIndex) => (
                    <li key={subIndex}>
                      <input type="text" value={subvariant.name} onChange={(event) => {
                        const newSubvariants = { ...subvariants };
                        newSubvariants[variant.name][subIndex].name = event.target.value;
                        setSubvariants(newSubvariants);
                      }} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;