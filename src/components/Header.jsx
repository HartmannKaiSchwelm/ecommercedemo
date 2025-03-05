// filepath: /C:/Users/Pappa/Desktop/scan/ecommercedemo/src/components/Header.jsx
import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'
const Header = () => {
  const { setIsOpen, isOpen} = useContext(SidebarContext)

  return (
    <header className="bg-custom-quat flex p-4">
    <div className="container flex justify-between items-center">
      <div>Header</div>
      <div className="cursor-pointer items-end" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl text-custom-prim justify-items-end mr-4"/>
      </div>
    </div>
    </header>
  )
}

export default Header