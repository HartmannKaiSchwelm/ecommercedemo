// filepath: /C:/Users/Pappa/Desktop/scan/ecommercedemo/src/components/Header.jsx
import { useContext, useState, useEffect } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
const Header = () => {
  // header state for scrolling bhv
  const [ isActive, setIsActive] = useState(false)
  const { setIsOpen, isOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  //event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  });
  return (
    <header className={`${isActive? 'bg-custom-prim py-2 shadow-md' : 'bg-none py-2 '} fixed w-full  z-10 transition-all`}>
      <div className="container lg:mx-auto items-center justify-between h-full flex font-quicksand px-4 ">
      <Link to={'/'}>
      <div>
        <img src={Logo} alt="logo" className="w-[50px] h-[50px]"/>
      </div>
      </Link>
      <div className="text-3xl text-custom-tert font-bold">Fake Demo Store</div>
      <div className="cursor-pointer flex relative " onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl text-custom-quart"/>
        <div className="bg-custom-tert absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
      </div>
   </div>
    </header>
  )
}

export default Header