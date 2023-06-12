import React from "react";
import Button from "../button/button";
import Image from "next/image";
import Logo from '../../assets/FundSpark.svg'
import Input from "../input/input";
import Text from "../text/text";

import './footer.css'

export default function Footer() {
  return (
    <div className="Footer">
      <div className="containerTop">
        <div className="logoAndLink">
          <div className="logo">
            <Image alt="link" src={Logo} />
          </div>
          <div className="listLink">
            <Button type={"LinkXS"} label={"Explorer les projets"} />
            <Button type={"LinkXS"} label={"Explorer les projets"} />
            <Button type={"LinkXS"} label={"Explorer les projets"} />
            <Button type={"LinkXS"} label={"Explorer les projets"} />
          </div>
        </div>
        <div className="newsletter">
          <Text variant={"preheading"}>Restez à jour !</Text>
          <div className="emailCapture">
            <Input label={"Entrez votre email"} type={"Email"} status={"Default"} help={false}/>
            <Button type={"XS"} label={"S'abonner"} />
          </div>
        </div>
      </div>
      <div className="containerBottom">
        <div className="divider"></div>
        <div className="footerLink">
          <Text variant={"date"}>© 2023 FundSpark. All rights reserved.</Text>
          <div className="linkList">
            <a href="" className="footerNav">Conditions générales</a>
            <a href="" className="footerNav">Donnée personnelles</a>
            <a href="" className="footerNav">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
}
