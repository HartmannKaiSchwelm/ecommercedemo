import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Checkout from "./pages/Checkout"
import ThankYou from "./pages/ThankYou"
import Impressum from "./pages/Impressum"
//components
import Header from './components/Header'
import Footer from './components/Footer'
import CartItem from './components/CartItem'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Sidebar from './components/Sidebar'

function App() {
  console.log("app component rendered");
  return (<>
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/thankyou/" element={<ThankYou />} />
        <Route path="/impressum/" element={<Impressum />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
    </>
  )
}

export default App
