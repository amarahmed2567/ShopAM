import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Col,} from 'react-bootstrap'
import SlideCart from './SlideCart'
import Loding from '../Loading/Loding'


function CartQuickLook() {
    const [cartData,setCartData] =useState([])
    const [itemIsDeletet,setItemIsDeletet] =useState(false)
    const getCartData = async ()=>{
        try{
            let respons = await axios.get('http://localhost:4000/posts/')
            let data = respons.data
            setCartData(data)
        }
        catch(error){
            console.log(error)
        }

    }
    useEffect(()=>getCartData,[itemIsDeletet])
  return (
    <Container className='mt-4'>
    <Row className='d-flex justify-content-center align-items-center w-100 '>
    {
        cartData.length > 0 ? cartData.map(prev=>{
            return(
            <Col xm={6} md={4} key={prev.id}>
                <SlideCart data={prev} setItemIsDeletet={setItemIsDeletet} itemIsDeletet={itemIsDeletet}/>
            </Col>
            )
        }):
        <Loding/>
    }
        </Row>
   </Container>
  )
}

export default CartQuickLook