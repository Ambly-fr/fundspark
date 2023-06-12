import React from 'react'
import './text.css'

export default function Text({ onClick, children, variant }) {
  return (
    <div onClick={onClick?onClick:null} style={onClick?{cursor:'pointer'}:null} className={variant}>{children}</div>
  )
}
