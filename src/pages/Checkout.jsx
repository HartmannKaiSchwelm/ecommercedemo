import React, { use, useContext, useEffect } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import CheckoutItem from '../components/CheckoutItem'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const {  isOpen, handleClose } = useContext(SidebarContext)
  const { cart, totalPrize, clearCart} = useContext(CartContext)

  // Close the sidebar when the Checkout component mounts
  useEffect(() => {
    handleClose()
  }, [])

  
  return (<>
     <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center font-cormorant">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between ">
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <h1 className="text-xl mb-8">Checkout</h1>
          <div className="flex flex-col space-y-4">
            {cart.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="w-full  lg:w-1/3 bg-custom-prim p-4 rounded-lg h-fit shadow-lg lg:fixed lg:right-40 lg:top-32">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <span>Total:</span>
              <span>€ {parseFloat(totalPrize).toFixed(2)}</span>
            </div>
          </div>
          <button
            className="buttons"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link to="/" className="buttons">
            Continue Shopping
          </Link>
          <Link to="/thankyou" className="buttons">
            <button onClick={()=>clearCart()}>Pay Now</button>
          </Link>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Checkout