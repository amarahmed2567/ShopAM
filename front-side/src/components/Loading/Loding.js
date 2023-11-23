import React from 'react'
import {Spinner,Container} from 'react-bootstrap'

function Loding() {
  return (
    <Container>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Container>
  )
}

export default Loding