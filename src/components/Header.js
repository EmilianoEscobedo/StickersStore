import React from 'react'
import fullCart from '../assets/statics/fullCart.png'
import emptyCart from '../assets/statics/cart.png'
import back from '../assets/statics/back.png'
import logo from '../assets/statics/logo.svg'
import { useContext } from 'react';
import Contexts from '../context/Contexts'
import '../assets/css/Header.css'
import { Link } from "react-router-dom";

export default function Header() {
  const { cart } = useContext(Contexts)
  return (
    <>
     <div className='header-container'>
        <Link to="/">
          <img src={back} alt="" className="header-back"/>
        </Link>
        <div>
          <Link to='/'>
            <img src={logo} alt="titulo" className='header-title' />
          </Link>
          STORE
        </div>
        <Link to="/cart">
            {cart.length != 0 ? 
            <img src={fullCart} alt="" className="header-cart" />
          :
          <img src={emptyCart} alt="" className="header-cart" />}
        </Link>
     </div>
    </>
  )
}
