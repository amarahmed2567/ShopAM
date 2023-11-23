import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Slider.css'
const Slider = ({data}) => {
  return (

        <Link to={`/product/${data.id}`}>
        <article className='slider'>

            <div className='slide-img' >
                <img className='item-img' src={data.image} alt=''/>
            </div>

            <div className='review'> 
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div> 

            <h3 className='slide-title'>
                {data.title}
            </h3>
            
            <p className='slide-info'>
            {data.direction}
            </p>

            <div className='slide-price'>
                <span className='itme-price'>{data.price} egp</span>
                <span className='itme-price-offer'>150 egp</span>
            </div>

        </article>
        </Link>
  )
}

export default Slider