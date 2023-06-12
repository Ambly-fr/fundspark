import React from 'react'
import Button from '../button/button'
import Input from '../input/input'
import Avatar from '../avatar/avatar'
import Image from 'next/image'

import Logo from '../../assets/FundSpark.svg'
import './header.css'

export default function Header({signed, avatarImg}) {
  return (
    <div className='header'>
        <div className="logoNavbar">
            <div className="logo">
             <Image  alt="link" src={Logo}/> 
            </div>
            <div className="navBar">
                <ul className="navList">
                    <Button type={'LinkXS'} label={"Explorer les projets"}/>
                    <Button type={'LinkXS'} label={"Explorer les projets"}/>
                    <Button type={'LinkXS'} label={"Explorer les projets"}/>
                    <Button type={'LinkXS'} label={"Explorer les projets"}/>
                </ul>
            </div>
        </div>
        <div className="accountAction">
            <Input type={"Search"} status={"Default"} label={"Search"}/>
            {
                signed? (
                    <Avatar img={avatarImg}/>
                ):(
                    <Button type={"XS"} label={"Sign in"}/>
                )
            }
        </div>
    </div>
  )
}
