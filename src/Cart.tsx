import React from 'react';

interface CartProps {
  total: number;
  items: any[ ]; 
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}


export const Cart: React.FC<CartProps> = ({ total, items, removeFromCart, updateQuantity }) => {
   console.log(items)
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item: any) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  );
};
