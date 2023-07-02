"use client";

import React from "react";
import Button from "../button/button";
import Input from "../input/input";
import Avatar from "../avatar/avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import Logo from "../../assets/FundSpark.svg";
import "./header.css";
import Text from "../text/text";

export default function Header() {
  const router = useRouter();
  const user = useSelector((state) => state.user); 
  const signed = Boolean(user.value);
  const avatarImg = user?.value?.photoURL;
  console.log(user);
  return (
    <div className="header">
      <div className="logoNavbar">
        <div className="logo">
          <Image
            alt="link"
            src={Logo}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <div className="navBar">
          <ul className="navList">
            <Button
              type={"LinkXS"}
              label={"Explorer les projets"}
              link={"/explore"}
            />
            <Button
              type={"LinkXS"}
              label={"Démarrer un projet"}
              link={"/create"}
            />
            <Button type={"LinkXS"} label={"À propos"} link={"/about"} />
            <Button type={"LinkXS"} label={"Contact"} link={"/contact"} />
          </ul>
        </div>
      </div>
      <div className="accountAction">
        <Input type={"Search"} status={"Default"} label={"Search"} />
        {signed ? (
          <div className="credentials" onClick={()=>{router.push("/account/"+user.value.uid);}}>
            <Text variant="username">
              {user.value?.displayName ? user.value.displayName : "none"}
            </Text>
            <Avatar img={avatarImg?avatarImg:""} />
          </div>
        ) : (
          <Button type={"XS"} label={"Se Connecter"} link={"/signin"} />
        )}
      </div>
    </div>
  );
}
