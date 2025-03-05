import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

//create a context
export const ProductContext = createContext();
const ProductProvider = ({children}) => {

  //products state
  const [products, setProducts] = useState([]);

  //fetch products
  useEffect(()=>{
    const fetchProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products');
      const data= await response.json();
     setProducts(data);
    };
    fetchProducts();
    
  },[])
  return (
    <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
  )
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider
