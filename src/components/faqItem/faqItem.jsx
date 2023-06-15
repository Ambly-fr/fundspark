'use client'

import React, { useState } from "react";
import Text from "../text/text";
import Image from "next/image";
import Close from "../../assets/close.svg";
import Open from "../../assets/open.svg";

import "./faqItem.css";

export default function FaqItem({ line, title, corp }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="faqItem">
      {line ? <div className="divider"></div> : null}
      <div className="content">
        <div className="Text">
          <div className="titlecontainer" onClick={() => setOpened(!opened)} >
            <Text variant="faqHead">
              {title}
            </Text>
          </div>
          {opened ? (
            <Text variant="faqcorp">
              {corp}
            </Text>
          ) : null}
        </div>
        <div className="icon">
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => setOpened(!opened)}
            width={20}
            height={20}
            alt="link"
            src={opened ? Close : Open}
          />
        </div>
      </div>
    </div>
  );
}
