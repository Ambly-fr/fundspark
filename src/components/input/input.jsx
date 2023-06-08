import React from "react";
import './input.css'

export default function Input({ type, label, helper, status, option }) {
  console.log(option)
  switch (type) {
    default:
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input className={"input-" + status} placeholder={label}></input>
          <span className={"helper "+ status}>{helper}</span>
        </div>
      );
    case "Password":
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input
            className={"input-" + status}
            type="password"
            placeholder={label}
          ></input>
          <span className={"helper "+ status}>{helper}</span>
        </div>
      );
      case "Multiline":
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <textarea
            className={"input-" + status}
            type="text"
            placeholder={label}
            style={{border:"2px solid", borderRadius:"10px",borderImage: "linear-gradient(to right, #ECDCF5, #AE9EF4,#61B0BC,#a2d4c983,#d6d7e8) 1"}}
          ></textarea>
          <span className={"helper "+ status}>{helper}</span>
        </div>
      );
      case "Email":
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input
            className={"input-" + status}
            type="email"
            placeholder={label}
          ></input>
          <span className={"helper "+ status}>{helper}</span>
        </div>
      );
      case "Search":
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input
            className={"input-" + status}
            type="search"
            placeholder={label}
          ></input>
          <span className={"helper "+ status}>{helper}</span>
        </div>
      );
  }
}
