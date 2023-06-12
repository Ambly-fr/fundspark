import React from "react";
import FaqItem from "../faqItem/faqItem";

import './faqList.css'

export default function FaqList({ questions }) {
  return (
    <div className="FaqList">
      {questions.map((item, index) => (
        <>
          <FaqItem line={index>0?true:false} title={item.title} corp={item.corp} />
        </>
      ))}
    </div>
  );
}
