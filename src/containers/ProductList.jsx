
import React from 'react'
import { ProductItem } from '@components/ProductItem'
import '@styles/ProductList.scss'
import { useGetProducts } from '@hooks/useGetProducts'

export const ProductList = () => {
  const products = useGetProducts()
  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}
