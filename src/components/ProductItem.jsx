
import React, { useContext } from 'react'
import '../styles/ProductItem.scss'
import iconAddToCart from '@icons/bt_add_to_cart.svg'
import AppContext from '../context/AppContext'

export const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => addToCart(product)}>
          <img src={iconAddToCart} alt='' />
        </figure>
      </div>
    </div>
  )
}
