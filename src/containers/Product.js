import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Product.css'
import Contexts from '../context/Contexts'

export default function Products() {
  const { addToCart, detail} = useContext(Contexts);
  const handleBuy = ()=>{
    addToCart(id, precio)
  }

  const {img, nombre, medidas, precio, descripcion, id} = detail[0];
    return (
    <>
      <div className="detail">
            <img
              src={img}
              alt="imagen del producto"
              className="detail-img"
            />
            <h1>{nombre}</h1>
            <p className="home-item-measures">Medidas: {medidas}</p>
            <div className="home-item-actions">
              <h3 className="home-item-price">AR${precio}</h3>&nbsp;
              <Link to="/cart">  
                <button className="home-item-buy" onClick={handleBuy}>+</button>
              </Link>
            </div>
            <div className='detail-box'>
              <p>
                {descripcion}
              </p>
            </div>
      </div>
    </>
  )
}




