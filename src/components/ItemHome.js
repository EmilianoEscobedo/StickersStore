import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Contexts from '../context/Contexts'
import '../assets/css/ItemHome.css'
import Product from '../containers/Product';
import swal from 'sweetalert'

export default function ItemHome(props) {
  const { nombre, precio, medidas, img, id } = props;
  const { addToCart, viewDetail} = useContext(Contexts)
  const handleBuy = ()=>{
    swal({
      title: 'Agregado al carrito!',
      icon: 'success',
      position: 'center',
      timer: 1100,
      buttons: ['none']
    })
    addToCart(id,precio)
  }
  const handleDetail = ()=>{
    viewDetail(id)
  }
  <Product props={props} />
  return (
    <>
      <div className="home-item">
      <Link to="product" onClick={handleDetail}>
        <img
          src={img}
          alt=""
          className="home-item-img"
        />
      </Link>
        <div className="home-item-info">
          <h1 className="home-item-title">{nombre}</h1>
          <p className="home-item-measures">Medidas: {medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-price">ARS ${precio}</h3>
            <button className="home-item-buy" onClick={handleBuy
            }>+</button>
          </div>
        </div>
      </div>
    </>
  )
}
