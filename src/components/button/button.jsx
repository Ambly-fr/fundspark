import React from 'react'
import Link from 'next/link'
import './button.css'

export default function Button({type,label,link, onClick}) {
  return (
    <div>
        <button className={"button "+type} onClick={onClick}>
          {onClick?label:
          <Link className={'button-link '+ type} href={link?link:"/"}>{label}</Link>
        }
        </button>
    </div>
  )
}
