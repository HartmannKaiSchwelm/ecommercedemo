import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CartContext } from '../contexts/CartContext'

const CheckoutItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  const { id, title, image, price, amount } = item

  return (
    <div className="flex gap-x-4 py-2 lg:px-6  border-custom-tert w-[400px] font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div className="flex w-full">
          <img className="max-w-[80px]" src={image} alt={title} />
          <div className="w-full flex flex-col px-2">
            <div className="flex justify-between mb-2 w-full">
              <div className="text-sm uppercase font-medium max-w-[240px] text-custom-quat">
                {title}
              </div>
              <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
                
              </div>
            </div>
            <div className="flex gap-x-2 h-[36px] text-sm">
              <div className="flex flex-1 max-w-[100px] items-center h-full hover:border-b-2 hover:border-t-2 text-black font-medium">
                <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                 
                </div>
                <div className="h-full flex justify-center items-center px-2">{amount}</div>
                <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                
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

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
}

export default CheckoutItem