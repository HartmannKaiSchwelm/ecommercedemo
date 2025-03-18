import React, {createContext, useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [totalPrize, setTotalPrize] = useState(0);

  const [notification, setNotification] = useState(null);

  // Neue Funktion zur Anzeige der Notification
  const showNotification = useCallback((message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 1500)
  }, [])

  useEffect(() => {
    const totalPrize = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalPrize(totalPrize);
  })

  useEffect(() => {
    const totalAmount = cart.reduce((total, item) => total + item.amount, 0)
    setItemAmount(totalAmount)
  }, [cart])
  const removeFromCart = (id) => {
    const newCart = [...cart].filter((item) => {
      return item.id !== id; 
    });
    setCart(newCart);
  };
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount)
    }
  })
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
    showNotification(`${product.title} added to cart!`)
    
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
      //if amount is 1, remove item from cart
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
    <CartContext.Provider value={{cart,addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, totalPrize}}>
      {children}
      {notification && (
        <div className="fixed bottom-5 right-5 bg-custom-prim text-custom-sec px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
  
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
