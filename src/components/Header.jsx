// filepath: /C:/Users/Pappa/Desktop/scan/ecommercedemo/src/components/Header.jsx
import { useContext, useState, useEffect } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from "../assets/minimalist_black_logo_transparent.png"
const Header = () => {
  // header state , not sure right now if isActive is needed
  const [ isActive, setIsActive] = useState(false)
  const { setIsOpen, isOpen} = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  //event listener , maybe not needed , decision pending
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  });
  return (
    <header className={`${isActive? 'bg-white py-2 shadow-md' : 'bg-white py-2 '} fixed w-full z-10 transition-all`}>
      <div className="container  mx-auto items-center justify-between h-full flex">
      <Link to={'/'}>
      <div>
        <img src={Logo} alt="logo" className="w-[40px] h-[40px]"/>
      </div>
      </Link>
      <div>Header</div>
      <div className="cursor-pointer flex relative " onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl text-custom-prim "/>
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
      </div>
   </div>
    </header>
  )
}

export default Header