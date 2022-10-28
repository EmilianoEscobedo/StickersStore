import React, { useContext } from 'react'
import '../assets/css/Cart.css'
import ItemCart from '../components/ItemCart'
import Contexts from '../context/Contexts'
import PayPalBtn from '../components/PayPalBtn'
import emptyCart from '../assets/statics/emptyCart.png'


export default function Cart() {
  const { cart, deleteInCart, total } = useContext(Contexts)

  return (
    <>
    {total !== 0 ? <div className="cart">
        <div className="cart-list">
          {cart.map((item, i) => (
            <ItemCart {...item} key={i} deleteInCart={deleteInCart}></ItemCart>
            ))}
        </div>
        <div className="cart-price">
          Total a pagar <br/>AR$ <strong>{total}</strong>
        </div>
        <div className="cart-paypal">
        <PayPalBtn/>
        </div>
      </div> : <div className='empty-cart-container'>
      <img src={emptyCart} class="empty-cart" alt="Carrito vacio" />Tu Carrito esta vacio!
      </div>
      }
    </>
  )
}


