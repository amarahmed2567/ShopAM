import React, { useState } from 'react'

function Size({sizeData}) {
  const [chosesize,setChosesize] = useState(sizeData)
  return (
    <div className="six-icon">
          <span  className='activ' >s</span>
          <span>m</span>
          <span>l</span>
          <span>xl</span>
          <span>xxl</span>
    </div>
  )
}

export default Size