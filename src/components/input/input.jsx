import React from "react";
import "./input.css";

export default function Input({
  type,
  label,
  helper,
  status,
  option,
  help,
  value,
  onChange,
}) {
  switch (type) {
    default:
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input
            className={"input-" + status}
            placeholder={label}
            value={value}
            onChange={onChange}
          ></input>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
    case "Password":
      return (
        <div className={"inputContainer " + type}>
          {help ? <span className={"label " + status}>{label}</span> : null}
          <input
            className={"input-" + status}
            type="password"
            placeholder={label}
            value={value}
            onChange={onChange}
          ></input>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
    case "Multiline":
      return (
        <div className={"inputContainer " + type}>
          {help ? <span className={"label " + status}>{label}</span> : null}
          <textarea
            className={"input-" + status}
            type="text"
            placeholder={label}
            value={value}
            onChange={onChange}
            style={{
              border: "2px solid",
              borderRadius: "10px",
              borderImage:
                "linear-gradient(to right, #ECDCF5, #AE9EF4,#61B0BC,#a2d4c983,#d6d7e8) 1",
            }}
          ></textarea>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
    case "Email":
      return (
        <div className={"inputContainer " + type}>
          {help ? <span className={"label " + status}>{label}</span> : null}
          <input
            className={"input-" + status}
            type="email"
            placeholder={label}
            value={value}
            onChange={onChange}
          ></input>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
    case "Search":
      return (
        <div className={"inputContainer " + type}>
          {help ? <span className={"label " + status}>{label}</span> : null}
          <input
            className={"input-" + status}
            type="search"
            placeholder={label}
            value={value}
            onChange={onChange}
          ></input>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
      case "Date":
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input
            className={"input-" + status}
            type="date"
            value={value}
            onChange={onChange}
          ></input>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
    case "File":
      return (
        <div className={"inputContainer " + type}>
          <span className={"label " + status}>{label}</span>
          <input
            className={"input-" + status}
            type="file"
            onChange={onChange}
          ></input>
          <span className={"helper " + status}>{helper}</span>
        </div>
      );
  }
}
