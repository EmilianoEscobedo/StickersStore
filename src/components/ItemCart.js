import React from 'react';
import '../assets/css/ItemCart.css';
import trash from '../assets/statics/trash.png'
import swal from 'sweetalert'

export default function ItemCart(props) {
  const {nombre, precio, img, id, quantity } = props[0];
  const handleTrash = () => {
    props.deleteInCart(id, precio)
    swal({
      title: 'Eliminado del carrito!',
      icon: 'error',
      position: 'center',
      timer: 800,
      buttons: ['none']
    })
  }
  
  return (
    <>
      <div className="cart-item">
        <img
          src={img}
          alt=""
          className="cart-item-img"
        />
        
        <div className="cart-txt">
          <h1 className="cart-item-title">{nombre} <span className="cart-item-quantity"> X{quantity}</span></h1>
          <h3 className="cart-item-price">AR$ {precio * quantity}</h3>
        </div>
        <button onClick={handleTrash}>
        <img src={trash} alt="" className="cart-item-delete"/>
        </button>
      </div>
    </>
  )
}
