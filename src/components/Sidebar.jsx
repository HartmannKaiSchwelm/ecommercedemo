// filepath: /C:/Users/Pappa/Desktop/scan/ecommercedemo/src/components/Sidebar.jsx
import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {IoCloseCircle} from "react-icons/io5";
import { CartContext } from '../contexts/CartContext';
import { FaTrashCan } from 'react-icons/fa6';
import {FiTrash2} from 'react-icons/fi';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, totalPrize, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`w-full font-cormorant bg-white fixed top-14 right-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-transform duration-300 z-20 px-4 lg:px-[35px] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Cart ({itemAmount})</div>
        <button className="cursor-pointer" onClick={handleClose}>
          <IoCloseCircle className="text-3xl text-custom-quart" />
        </button>
      </div>
      <div className=" flex flex-col gap-y-2 h-[calc(100vh-18rem)] overflow-y-auto overflow-x-hidden border-b" >
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="bg-custom-prim flex flex-col gap-y-3 py-3 mt-3">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase text-semibold"> 
            <span className="mr-2">Total:</span>€ {parseFloat(totalPrize).toFixed(2)}
            </div> 
          <div onClick={clearCart} className="cursor-pointer py-4 bg-transparent text-custom-quat w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 />
            </div>
          </div>
         <Link to={"/checkout"} className="buttons">Checkout</Link>
          </div>
    </div>
  )
}

export default Sidebar