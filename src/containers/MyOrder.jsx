import React, { useContext } from 'react'
import { OrderItem } from '../components/OrderItem'
import AppContext from '../context/AppContext'
import '../styles/MyOrder.scss'
import arrowLeft from '@icons/flechita.svg'

export const MyOrder = () => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (acc, currentValue) => acc + currentValue.price

    const sum = state.cart.reduce(reducer, 0)
    return sum
  }

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={arrowLeft} alt='arrow Left' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map(productCart => (
          <OrderItem
            key={`orderItem_${productCart.id}`}
            product={productCart}
          />
        ))}
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className='primary-button'>
          Checkout
        </button>
      </div>
    </aside>
  )
}
