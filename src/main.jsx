import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
//product provider
import ProductProvider from './contexts/ProductContext.jsx'
import CartProvider from './contexts/CartContext.jsx'

//sidebar provider
import SidebarProvider from './contexts/SidebarContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
  <ProductProvider>
    
      <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
  
  </ProductProvider>
  </CartProvider>
 </SidebarProvider>
)
