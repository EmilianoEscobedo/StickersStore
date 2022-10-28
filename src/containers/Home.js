import React from 'react'
import ItemHome from '../components/ItemHome'
import { useContext, useEffect } from 'react'
import Contexts from '../context/Contexts'
import '../assets/css/Home.css'

export default function Home() {
  const { getProducts, products } = useContext(Contexts)
  useEffect(() => {
    getProducts()
  },[])
  
  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {
              products.map((item) => (
                <ItemHome {...item} key={item.id}></ItemHome>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
