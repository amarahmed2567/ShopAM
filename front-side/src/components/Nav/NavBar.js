import React, { useEffect, useState } from 'react'
//Css File
import './Nav.css'
//React Router Dom
import {Link} from 'react-router-dom'
//React Icons
import {FaSearch,FaShoppingCart} from 'react-icons/fa'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import{BiSolidLogInCircle} from 'react-icons/bi'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import AlertToast from '../Alerts/AlertToast'


function NavBar({isAddedToCart}) {
    const [countOfItemsInCart,setCountOfItemsInCart] =useState(0)
    useEffect(()=>{
        axios.get('http://localhost:4000/posts/')
        .then((res)=>{
            setCountOfItemsInCart(()=>res.data.length)
            
        })
    },[isAddedToCart])
    return (
        // Start NavBar 
        <nav >
            <Container className='NavBar'>
            {/* logo section */}
            <Link to='/' className='logo'>
                <h1>shop<sub>AM</sub></h1>
            </Link>
            <div className='icons-nav'>
                <FaSearch className='icon search'></FaSearch>
                <BsBookmarkHeartFill className='icon wishlist'></BsBookmarkHeartFill>
                <Link to='/cart' className='cart'>
                <FaShoppingCart className='icon cart'></FaShoppingCart>
                {countOfItemsInCart !== 0 ? <AlertToast ToastText={countOfItemsInCart}/>:null}
                </Link>
                <BiSolidLogInCircle className='icon login'></BiSolidLogInCircle>
            </div>
            </Container>
        </nav>
    )
}

export default NavBar