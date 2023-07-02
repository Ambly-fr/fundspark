import Image from 'next/image'
import React from 'react'
import './image.css'

export default function Illustration({ src, alt, type }) {
    switch (type) {
        case 'project':
            return(
                    <Image className='img' loading='lazy' height={240} width={384} src={src} alt={alt} />
            )
        break;
        case 'content':
            return(
                    <Image className='img' loading='lazy' height={400} width={1216} src={src} alt={alt} />
            )
        break;
        case 'default':
            return(
                    <Image className='img' loading='lazy' height={480} width={720} src={src} alt={alt} />
            )
        break;
        case 'project_Presentation':
            return(
                    <Image className='img' loading='lazy' height={516} width={1216} src={src} alt={alt} />
            )
        break;
}
}
