import React from 'react'
import ProductData from '../Home/ProductData'
import Slider from '../Sliders/Slider'
import './Products.style.css'
function Products() {
  
    return (
    <div className='Products'>
    {ProductData.map((prev)=>{
        return(
            <div className='m-5'>
            <Slider data={prev} key={prev.id}/>
            </div>
        )
    })}</div>
  )
}

export default Products