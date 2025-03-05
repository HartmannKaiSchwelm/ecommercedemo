import React,{ useContext}   from 'react'
import {ProductContext} from '../contexts/ProductContext'
import ProductCard from '../components/ProductCard'
const Home = () => {
  // get products from context
  const {products} = useContext(ProductContext);
  console.log(products);

  // filter only for clothing products
  const clothingProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(clothingProducts);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid.cols-5 gap-[30px] max-w-sm
          mx-auto md:max-w-none md:mx-0">
            {clothingProducts.map((product) =>{ 
              return <ProductCard product={product} key={product.id}/>;
            })}
             

          </div>
        </div>
        </section>
    </div>
  )
}

export default Home