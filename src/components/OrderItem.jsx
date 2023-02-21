import React from 'react'
import '@styles/OrderItem.scss'
import iconClose from '@icons/icon_close.png'
import { useAppContext } from '../context/AppContext'

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useAppContext()

  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={iconClose}
        alt='close'
        onClick={() => removeFromCart(product)}
      />
    </div>
  )
}
