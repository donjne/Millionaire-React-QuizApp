import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <img
        src={require("../assets/logo.jpg")}
        alt="logo"
        className="startImage"
      />
      <input
        type="text"
        placeholder="Enter your username"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
