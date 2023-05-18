import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import { Product } from './Product';
import axios from 'axios';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      setProducts(res.data);
    }).catch((error) => {
      console.error('Failed to fetch products:', error);
    });
  }, []);
  const addToCart = (product: any) => {
   
  };
  return (
    <div>
      
    </div>
  );
};
