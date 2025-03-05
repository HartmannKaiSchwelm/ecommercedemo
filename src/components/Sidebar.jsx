// filepath: /C:/Users/Pappa/Desktop/scan/ecommercedemo/src/components/Sidebar.jsx
import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {IoCloseCircle} from "react-icons/io5";
import { CartContext } from '../contexts/CartContext';
import { FaTrashCan } from 'react-icons/fa6';
import CartItem from './CartItem';
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart } = useContext(CartContext);

  return (
    <div
      className={`w-full bg-white fixed top-14 right-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-transform duration-300 z-20 px-4 lg:px-[35px] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({cart.length})</div>
        <button className="cursor-pointer" onClick={handleClose}>
          <IoCloseCircle className="text-3xl text-custom-quart" />
        </button>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar