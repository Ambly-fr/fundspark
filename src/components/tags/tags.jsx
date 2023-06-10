import React from 'react'
import Text from '../text/text'

import './tags.css'

export default function Tags({children}) {
  return (
    <div className='tagcontainer'>
        {children}
    </div>
  )
}
