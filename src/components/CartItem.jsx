import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {IoMdClose, IoMdRemove, IoMdAdd} from "react-icons/io";
import {CartContext} from '../contexts/CartContext';
const CartItem = ({item})=>{
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title,image, price, amount } = item;


  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-custom-tert w-full font-light text-gray-500">
  <div className="w-full min-h-[150px] flex items-center gap-x-4">
    <div className="flex w-full">
      <Link to={`/product/${id}`}>
        <img className="max-w-[80px]" src={image} alt={title} />
      </Link>
      <div className="w-full flex flex-col px-2">
        <div className="flex justify-between mb-2 w-full">
          <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-custom-quat hover:underline">
            {title}
          </Link>
          <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
            <IoMdClose className="text-gray-500 hover:text-red-500 transition"/>
          </div>
          
        </div>
        <div className=" flex gap-x-2 h-[36px] text-sm ">
          <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
            <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoMdRemove />
            </div>
            <div className="h-full flex justify-center items-center px-2">{amount}</div>
            <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoMdAdd  />
              </div>
          </div>
            <div className="flex-1 flex items-center">quantity</div>
            <div className="flex-1 flex items-center justify-around">€ {price}</div>
            <div className="flex-1 flex justify-end items-center text-custom-quant font-medium">€ {parseFloat(price * amount).toFixed(2)}</div>
          </div>
      </div>
    </div>
  </div>
</div>
  )
  
}
CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default CartItem
