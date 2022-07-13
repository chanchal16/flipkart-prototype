import React from 'react'
import products from '../products.json';
import { ProductCard } from '../components/ProductCard';
import { Sidebar } from '../components/Sidebar';

export const Products = () => {
  return (
    <section className='flex'>
      <Sidebar/>

    
    <div className="product-list container-mid mt-8 mb-8 grid place-items-center place-self-center  md:grid-cols-4">
        {
            products.length > 0 ? (
              products?.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))
            ):(
              <h3 className='text-2xl text-gray-500 '>No products found...</h3>
            )
        }
    </div>
    </section>
  )
}
