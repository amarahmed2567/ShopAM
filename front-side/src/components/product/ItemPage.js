import React from 'react'
import ProductData from '../Home/ProductData'
import { Link, useParams } from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import './ItemPage.css'
import axios from 'axios'
import Size from './Size'
function Product({setIsAddedToCart,isAddedToCart}) {
    const {id} = useParams()
    const item = ProductData.find((prev)=>prev.id == id)
    const sendToCar = ()=>{
              axios.post('http://localhost:4000/posts',{
                item
              })
              .then((respons)=>{
                  console.log(respons)
                  setIsAddedToCart(()=>!isAddedToCart)
              })
              .catch(error=>{
                  console.log(error)
              })
    }
    return (
      <section className='product'>
          <div className='product-imgs'>
            <Link to='/' className='back-icon'>
            <IoMdArrowRoundBack ></IoMdArrowRoundBack>
            </Link>
            <img src={item.image} alt={item.title}/>
          </div>
          <div className='product-info'>
            <h1 className='product-title'>{item.title}</h1>
            <p className='product-direction'>{item.direction}</p>
            <div className='product-siz'>
              <div className='product-text-header'>siz</div>
                <Size sizeData={item.size}/>
            <p className='product-price'>{item.price} Egp</p>
            </div>
            <button className='Button item-add-car' onClick={sendToCar}>add to car</button>
          </div>
      </section>
      )
}

export default Product