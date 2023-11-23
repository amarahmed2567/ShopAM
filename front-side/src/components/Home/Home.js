import React from 'react'
import './Home.css'
import Slider from '../Sliders/Slider';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import ProductData from './ProductData'
import {Link} from 'react-router-dom'


const Home = () => {
  console.log(window.innerWidth)
  return (
    <div className='Home'>
      <div className='Home-Portrait'>
        <div className='Portrait-Special'>
          <p>Get Up To 40% Off <br /> New Arrivals</p>
          <Link  to='/products' className='Button'>Shop Now</Link>
        </div>
        <img className='Home-Portrait-img display-none'  src={'/img/men..png'} alt='shop-img'></img>
      </div>
      <Swiper
      className=' Slids-block'
      slidesPerView={(window.innerWidth <= 700) ? 1 :(window.innerWidth <= 900) ? 2 : 3}
      effect={'coverflow'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}

      modules={[Autoplay,Pagination]}
    >
      {ProductData.map((prev)=>{
        return(
          <SwiperSlide  className='swiperSlid' key={prev.id} >
            <Slider data={prev}/>
          </SwiperSlide>
        )
      })}

    </Swiper>
      <div className='products-btn'>
          <Link  to='/products' className='Button products-btn'>more products</Link>
      </div>
    </div>
  )
}

export default Home;