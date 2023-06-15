'use client'

import React from "react";
import "./projectCard.css";
import Illustration from "../image/image";
import Text from "../text/text";
import ProgressBar from "../progressBar/progressBar";
import Avatar from "../avatar/avatar";
import Image from "next/image";
import Arrow from "../../assets/arrowAngle.svg";

export default function ProjectCard({
  title,
  description,
  imgSrc,
  link,
  category,
  progress,
  user,
  date,
}) {
  return (
    <div className="projectCard" href={link}>
      <div className="projectCard__image">
        <Illustration src={imgSrc} alt={"test"} type={"project"} />
      </div>
      <div className="projectCard__content">
        <div className="projectCard__link">
        <Text variant={"preheading"}>{category}</Text>
        <Image width={15} height={15} alt="link" src={Arrow}/>
          </div>
        <div className="headinfAndText">
          <Text variant={"projectname"}>{title}</Text>
          <Text variant={"description"}>{description}</Text>
        </div>
      </div>
      <ProgressBar current={progress.current} total={progress.total} />
      <div className="projectCard__footer">
        <Avatar img={user.img} alt={user.name} />
        <div className="userInfo">
          <Text variant={"preheading"}>{user.name}</Text>
          <Text variant={"date"}>{date}</Text>
        </div>
      </div>
    </div>
  );
}
