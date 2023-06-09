import React from 'react'
import './button.css'

export default function Button({type,label}) {
  return (
    <div>
        <button className={"button "+type}>{label}</button>
    </div>
  )
}
