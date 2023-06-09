import Image from 'next/image'
import React from 'react'
import './avatar.css'

export default function Avatar({img}) {
  return (
    <Image className='Avatar' width={40} height={40}  src={img}/>
  )
}
