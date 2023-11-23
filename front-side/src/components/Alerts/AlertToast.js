import React from 'react'

export default function AlertToast({ToastText}) {
  const toastStyle ={
    width:"20px",
    height:"20px",
    backgroundColor:"#1c01e0",
    position: "absolute",
    bottom:"-10px",
    right:"2px",
    textAlign:"center",
    color:"#fff",
    fontSize:"12px",
    borderRadius:"50%",
    lineHeight:"1.6"

  }
  return (
    <div style={toastStyle}>
      {ToastText}
    </div>
  )
}
