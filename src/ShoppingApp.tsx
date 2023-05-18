import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import { Product } from './Product';
import { Cart } from './Cart';
import axios from 'axios';

export const ShoppingApp: React.FC = () => {
  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }

  const [products, setProducts] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      setProducts(res.data);
    }).catch((error) => {
      console.error('Failed to fetch products:', error);
    });
  }, []);

  const addToCart = (product: any) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedItems: CartItem[] = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 ,price:item.price} 
       :item
      );
      setCartItems(updatedItems);
    } else {
      const newItem: CartItem = { ...product, quantity: 1, price: 32 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      );
      setCartTotal(total);
    };

    calculateTotal();
  }, [cartItems]);
  console.log(cartItems)

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          addToCart={addToCart}
        />
      ))}
      <Cart
        total={cartTotal}
        items={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        
      />
    </div>
  );
};
