import axios from 'axios'
import React, {useState } from 'react'
import { Card, Button} from 'react-bootstrap'

function SlideCart({data,setItemIsDeletet,itemIsDeletet,isAddedToCart,setIsAddedToCart}) {

  const deleteItemsFromCart = async()=>{
          try{
              let response = await axios.delete(`http://localhost:4000/posts/${data.id}`)
              console.log(response )
              setItemIsDeletet(()=>!itemIsDeletet)
              setIsAddedToCart(()=>!isAddedToCart)
          }
          catch(error){
              console.log(error)
          }
  }
  return (
 <Card
    style={{ width: '18rem'}}
    className="p-2 m-1"
    >
  <Card.Header>{data.item.title}</Card.Header>
  <Card.Body>
  <Card.Img variant="" className='w-50 d-flex' style={{margin:"0 auto"}} src={data.item.image} alt={data.item.title}></Card.Img>
    <Card.Text>
    {data.item.direction.substr(0,60)}...
    </Card.Text>
    <Card.Title>{data.item.price} EGP </Card.Title>
  </Card.Body>
  <Button variant='danger' className='w-50 ' onClick={()=>deleteItemsFromCart()}>Delete Item</Button>
</Card>
  )
}

export default SlideCart