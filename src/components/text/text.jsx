import React from 'react'
import './text.css'

export default function Text({ children, variant }) {
  return (
    <div className={variant}>{children}</div>
  )
}
