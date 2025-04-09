import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-custom-prim py-12 font-quicksand font-bold">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-custom-quat text-center mb-4">© 2023 Fake Demo Store</p>
          <div className="flex space-x-4">
            <Link to="/impressum" className="text-custom-tert hover:text-custom-sec transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer