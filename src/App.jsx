import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

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
      </Routes>
      <Sidebar />
      <Footer />
    </div>
    </>
  )
}

export default App
