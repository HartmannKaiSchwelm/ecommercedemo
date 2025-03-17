import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CartContext, ProductContext, SidebarContext } from '../contexts'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)
  const { handleClose } = useContext(SidebarContext)

  // Produkt suchen mit Error-Handling
  const product = products.find(item => item.id === parseInt(id))

  // Wichtige Verbesserungen:
  useEffect(() => {
    handleClose()
    
    // Redirect bei ungültiger Produkt-ID
    if (!product) {
      navigate('/not-found', { replace: true })
      return
    }
  }, [product, handleClose, navigate])

  // Fallback für fehlendes Produkt
  if (!product) {
    return (
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center justify-center font-cormorant">
        <div className="text-2xl">Produkt wird geladen...</div>
      </section>
    )
  }

  // Destrukturierung erst NACH der Null-Check
  const { title, price, description, image } = product

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center font-cormorant">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img 
              className="max-w-[200px] lg:max-w-sm" 
              src={image} 
              alt={title} 
              onError={(e) => {
                e.target.src = '/fallback-image.jpg' // Fallback für defekte Bilder
              }}
            />
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-custom-quat font-medium mb-6">
              € {price.toFixed(2).replace('.', ',')} {/* Preisformatierung */}
            </div>
            <p className="mb-8">{description}</p>
            <button 
              onClick={() => addToCart(product, product.id)}
              className="buttons hover:scale-105 transition-transform"
            >
              In den Warenkorb
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
