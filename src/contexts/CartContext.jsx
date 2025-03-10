import React, {createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const removeFromCart = (id) => {
    const newCart = [...cart].filter((item) => {
      return item.id !== id; 
    });
    setCart(newCart);
  };

  const addToCart = (product,id) => {
    const newItem = { ...product, amount: 1};
    const cartItem = cart.find((item) => {
      return item.id === id
  });

  //check if item is already in cart, increase amount
  if (cartItem) {
    const newCart = [...cart].map(item => {
      if (item.id === id) {
        return { ...item, amount: cartItem.amount + 1 };
      }
      else{
        return item;
      }
    })
    setCart(newCart);
  }
  else{
    setCart([...cart, newItem]);
  }
    
    
  };
 
  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
    
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount === 1) {
        removeFromCart(id);
      } else {
        const newCart = cart.map((item) => {
          if (item.id === id){
            return {...item, amount: cartItem.amount - 1};
          }
          else{
            return item;
          }
        });
        setCart(newCart);
      }
    }
  };
  return (
    <CartContext.Provider value={{cart,addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount}}>{children}
      
      </CartContext.Provider>
  );
  
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
