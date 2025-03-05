import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'
//import cart context
import { CartContext } from '../contexts/CartContext'
const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartContext);
  // destructur product
  const {id, title, price, category, image, description } = product;
  return (
    <div>
      <div className="border border-custom-sec h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[160px] group-hover:scale-110 transition duration-300"src={image}></img>
          </div>
          <div className="absolute -bottom-14 right-0 group-hover:bottom-0 bg-custom-sec/40 gap-y-2 opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-custom-tert flex transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-custom-quart w-12 h-12">
                <BsPlus className="text-3xl"/>
              </div>
            </button>
          
            <Link to={`/product/${id}`} className="w-12 h-12  bg-custom-sec flex justify-center items-center text-custom-prim drop-shadow-xl">
            <BsEyeFill />
            </Link>
            
          </div>
        
        </div>  
       
        
        </div> 
         {/* category title and price */}
         <div>
          <div className="text-sm capitalize text-custom-quart">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
         <div className="font-semibold">€  {price}</div>
        </div>
    </div>
  )
}

export default ProductCard