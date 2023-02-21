import React, { useContext } from 'react'
import { OrderItem } from '../components/OrderItem'
import AppContext from '../context/AppContext'
import '../styles/MyOrder.scss'

export const MyOrder = () => {
  const { state } = useContext(AppContext)

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src='./icons/flechita.svg' alt='arrow' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map(productCart => (
          <OrderItem
            key={`orderItem_${productCart.id}`}
            product={productCart}
          />
        ))}
        <OrderItem />
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className='primary-button'>
          Checkout
        </button>
      </div>
    </aside>
  )
}
