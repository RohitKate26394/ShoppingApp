import React from 'react';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  addToCart: (id: string, price: number, name: string) => void;
}

export const Product: React.FC<ProductProps> = ({ id, name, price, image, addToCart }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(id,price,name)}>Add to Cart</button>
    </div>
  );
};
