import React, {createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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
  console.log(cart);
  return (
    <CartContext.Provider value={{cart,addToCart}}>{children}
      
      </CartContext.Provider>
  );
  
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
