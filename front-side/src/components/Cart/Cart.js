import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container ,Card, Row, Col, Button, Alert} from 'react-bootstrap'
import Loding from '../Loading/Loding'
import SlideCart from './SlideCart'

function Cart({isAddedToCart,setIsAddedToCart}) {

    const [cartData,setCartData] =useState([])
    const [itemIsDeletet,setItemIsDeletet] =useState(false)
    const [loading,setLoading] = useState(false)
    const [cartError,setCartError] =useState(false)
    const [cartErrorText,setCartErrorText] =useState('')
    const getCartData = async ()=>{
        try{
            const data = await axios.get('http://localhost:4000/posts/')
                    .then((respons)=>{
                        setCartData(respons.data)
                    })
            setLoading(true)
        }
        catch(error){
            console.log(error)
            setCartError(true)
            // setLoading(false)
            setCartErrorText(error.message)
        }

    }
    useEffect(()=>getCartData,[itemIsDeletet,isAddedToCart])
    return (
   <Container className='mt-4'>
        <Row className='d-flex justify-content-center align-items-center w-100 '>
            {
            loading  ? cartData.map(prev=>{
                return(
                <Col xm={6} md={4} key={prev.id}>
                    <SlideCart 
                        data={prev} 
                        setItemIsDeletet={setItemIsDeletet} 
                        itemIsDeletet={itemIsDeletet} 
                        isAddedToCart={isAddedToCart} 
                        setIsAddedToCart={setIsAddedToCart}/>
                </Col>
                )
            }):
            <Loding/>
            }
            {cartData.length ==0 ? <div>There is no data to show</div>:null}
            {cartError ? <Alert>
                            <Alert.Heading>{cartErrorText}</Alert.Heading>
                        </Alert> 
                        :null 
            }
        </Row>
   </Container>
  )
}

export default Cart